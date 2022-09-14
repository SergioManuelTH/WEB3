
const Web3 = require('web3');
const web3 = new Web3('https://rinkeby.infura.io/v3/a96943cbd5bc42389cbfb950211312c5');
const Tx = require('ethereumjs-tx').Transaction;

const address1='0x8F5366A3B63e0145AdBAE3797CB6A4540421543A';//metamask master
const address2='0xd7a3fd063b30deAc367558c94dB25612e7606408';//metamask NFT_Opensea
const address1Key= new Buffer.from('50570b6ca6e292d0b53f3528d3cb763fe9c1f38aeeb8eac0ad8d962fc8ddb78b','hex');

web3.eth.getTransactionCount(address1,(err,txCount)=> {
    let rawTx={
        nonce: web3.utils.toHex(txCount),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10','gwei')),
        to: address2,
        value: web3.utils.toHex(web3.utils.toWei('123', 'wei'))
        
    }

    const tx = new Tx(rawTx, { chain: 'rinkeby' });
    tx.sign(address1Key);
    var serializedTx = tx.serialize();
    web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
        .on('receipt', console.log);
})


