require("dotenv").config();
const ImmopetToken = artifacts.require("ImmopetToken");
const ownerAddress = process.env.OWNER_ADDRESS;
const tokenSymbol = process.env.TOKEN_SYMBOL;
const tokenName = process.env.TOKEN_NAME;
const initialSupply = web3.utils.toWei(process.env.INITIAL_SUPPLY);

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(
    ImmopetToken,
    tokenName,
    tokenSymbol,
    initialSupply,
    ownerAddress
  );
  const token = await ImmopetToken.deployed();

  // await deployer.deploy(FarmToken, myToken.address);
  // const farmToken = await FarmToken.deployed();
};
