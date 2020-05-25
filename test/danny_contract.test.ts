import * as assert from "assert";
import * as fs from "fs";
import Web3 from "web3";
import { ContractsDannyContractSolDannyContract } from "../types/web3-v1-contracts/contracts_DannyContract_sol_DannyContract";

describe("DannyContract", () => {
  // geth --datadir geth-test-chain-dir --rpc --dev
  it("Can emit One", async () => {
    const web3 = new Web3('http://127.0.0.1:8545/');
    const accounts = await web3.eth.getAccounts();
    console.log(`Account: ${accounts[0]}!`);

    const contractAbi = fs.readFileSync("build/contracts/DannyContract.abi").toString();
    const contractBin = fs.readFileSync("build/contracts/DannyContract.bin").toString();
    const contract = new web3.eth.Contract(JSON.parse(contractAbi), undefined);
    const c = await contract
      .deploy({ data: `0x${contractBin}` })
      .send({
        from: accounts[0],
      });

    const d = c as any as ContractsDannyContractSolDannyContract;
    let didEmitOne = false;
    d.events.One((e) => didEmitOne = true);
    await d.methods.one().call();
    assert.ok(didEmitOne);

    (web3.currentProvider as any).disconnect();
  });
});
