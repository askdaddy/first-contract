/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('dotenv').config();
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.3",
  networks:{
    hardhat:{},
    rinkeby:{
      url:`https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts:[`0x${process.env.METAMASK_PRIVATE_KEY}`]
    }
  }
};
