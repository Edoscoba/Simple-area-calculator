require("hardhat/config");

require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const {SEPOLIA_URL, PRIVATE_KEY , ETHERSCAN_KEY} = process.env;
module.exports = {
  solidity: "0.8.24",
  networks: { 
    sepolia: {
      url: SEPOLIA_URL || "",
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY]:[]
    }
  },
  etherscan : {
    apiKey: ETHERSCAN_KEY}
};


