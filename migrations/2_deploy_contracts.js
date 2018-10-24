var DappToken = artifacts.require("./PaveliumToken.sol");
var DappTokenSale = artifacts.require("./PaveliumTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(PaveliumToken, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(DappTokenSale, DappToken.address, tokenPrice);
  });
};
