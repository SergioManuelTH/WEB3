const Web3 = require('web3');
const web3 = new Web3();


//wallet creation
const seed = web3.utils.sha3(Math.random(0,1000000).toString(16) + web3.utils.randomHex(32));
const wallet = web3.eth.accounts.create(seed);
//console.log('Wallet object: ', wallet);

//wallet encryptation
const password = '12345';
const privateKeyEncrypted = web3.eth.accounts.encrypt(wallet.privateKey,password);
//console.log('Encrypted object: ', privateKeyEncrypted);

//wallet de-encryptation
const privateKey = web3.eth.accounts.decrypt(privateKeyEncrypted,password);
//console.log('De-encrypted object: ', privateKey);

//multiple wallets creation
const numberOfWallets = 2;
const wallets = web3.eth.accounts.wallet.create(numberOfWallets, seed);
//console.log('Multiple wallets object: ', wallets);

