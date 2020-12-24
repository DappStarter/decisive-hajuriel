require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remember around heavy process olympic skull'; 
let testAccounts = [
"0xf9470853d4c41086ae87e171076581fac5a2c4a78e5a0ef7d61a016a2e08fbe5",
"0x8905a5f731e748afc30a75c5edb2d2bd2bc0350e49e90688477ac0e56e7cf76e",
"0x81dc67327349eb96c494a4547441afe10e0666381f2c87af3b69739209a82e36",
"0x61e55b39563b574950317bf83a8e6d0fe5db943e1be810e50e0754af783bf307",
"0x73ae615ad4b00cdfe30462d7a9bd732a73eec99cd2740946fc6dda31b3653b16",
"0x122177a7ef4dc089387da0fcfc118bb987821a361ee92c2ebd6e141df76b01db",
"0x941a55267c0981a1098dc285abf07b5e6ea853c6edd64be7f1768ea05f35a293",
"0x8df76175e08141f82bfdc95ffd71863dbfe7973718cd0dd7ba9de1ed3b4b7766",
"0x0cfdbbbab9d703e5f18fdff395a9aaf14a5b7c7ed631f2ace486323456093296",
"0x226dbb83c8690231fa0e4a38229f684625b6d2ee86730127066eb54a7b4763d7"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
