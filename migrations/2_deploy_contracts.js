const DannyContract = artifacts.require("DannyContract");

module.exports = function (deployer) {
  deployer.deploy(DannyContract);
};
