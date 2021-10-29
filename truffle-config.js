require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
    networks:{
        development: {
            host: "127.0.0.1",     // Localhost (default: none)
            port: 7545,            // Standard Ethereum port (default: none)
            network_id: "5777",    // Any network (default: none)
            gasPrice: 5000000000,  // 20 gwei (in wei) (default: 100 gwei)
        },
        live: {
            provider: () => new HDWalletProvider([process.env.WALLET_PRIVATE_KEY], `https://mainnet.infura.io/v3/${process.env.INFURA_IO_PROJECT_ID}`, 0, 1),
            network_id: 1,       // Mainnet's id
            gas: 50000,        // Rinkeby has a lower block limit than mainnet
            gasPrice: 90000000000,  // 20 gwei (in wei) (default: 100 gwei)
            confirmations: 1,    // # of confs to wait between deployments. (default: 0)
            timeoutBlocks: 500,  // # of blocks before a deployment times out  (minimum/default: 50)
            skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
        },
        rinkeby: {
            provider: () => new HDWalletProvider([process.env.WALLET_PRIVATE_KEY], `https://rinkeby.infura.io/v3/${process.env.INFURA_IO_PROJECT_ID}`, 0, 1),
            network_id: 4,       // Rinkeby's id
            // gas: 29970705,        // Rinkeby has a lower block limit than mainnet
            gasPrice: 1000000000,  // 20 gwei (in wei) (default: 100 gwei)
            confirmations: 1,    // # of confs to wait between deployments. (default: 0)
            timeoutBlocks: 5,  // # of blocks before a deployment times out  (minimum/default: 50)
            skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
        },
    },
    // Configure your compilers
    compilers: {
        solc: {
            version: "0.8.3",    // Fetch exact version from solc-bin (default: truffle's version)
            // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false
        }
    },
}
