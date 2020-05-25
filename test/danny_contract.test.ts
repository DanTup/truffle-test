const DannyContract = artifacts.require("DannyContract");

contract("DannyContract", (accounts) => {
  it("Can emit One", async () => {
    const danny = await DannyContract.new();
    const resp = await danny.one({ value: "3000000" });

    expect(resp.logs.length).equals(1);
    expect(resp.logs[0].event).equals("One");
    const args = resp.logs[0].args as any;
    expect(args.foo).equals("One");
  });
});
