require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict drum off uphold drift renew machine hole inflict praise army genuine'; 
let testAccounts = [
"0xc11e08281fc2bb813e45f891b8daf190ec2668881e7884a74640be9b34e26997",
"0xb3bd2196424280e9e1a81ab132582542c93eca4776bc6c5ef44d2e8dd40334b3",
"0xd231bd1ed0ccf5e7378d1e1337316054e7adbf996742000ca2096aa412e901a1",
"0x3e1deeb753109dac95584cf54b1b5855d16fc4b8659fd6f62ff7a710acee26ab",
"0x38abbde2e7b1a64d1d8dac1327e974727769d04c87d35ea10758395c5580664e",
"0xdc90063ea25cbb62999f27880cf4ba3a0cdce60a3ba8f7d389fcf83801d55e4b",
"0xf9ea37c559be9cb512b92158a152ab71a50cf87bd37e414836aa83945bb2322c",
"0xa751a7d3f39b89df4967837e33431fc36610d5017ecde4d9b9dacbee756b6ccc",
"0xff8e2e79ffaabc2ba2886a6bf128e4f97a7d85b3c6de2de95287bbcdbd21a744",
"0xc1dfb55cb2c40f444c1270813d053b811bc41fa4f2b7055ed3118964f19bb550"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


