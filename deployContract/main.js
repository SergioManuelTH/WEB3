const Web3 = require('web3');
const Ethereumjs = require('ethereumjs-tx').Transaction;
const solc = require('solc');
const fs = require('fs');

const web3 = new Web3('https://rinkeby.infura.io/v3/a96943cbd5bc42389cbfb950211312c5');
const address1='0x8F5366A3B63e0145AdBAE3797CB6A4540421543A';//metamask master
const address1Key= new Buffer.from('50570b6ca6e292d0b53f3528d3cb763fe9c1f38aeeb8eac0ad8d962fc8ddb78b','hex');


const contentFile =  fs.readFileSync('basico.sol').toString();
var  input = {
    language: 'Solidity',
    sources: {
        'basico.sol':{
            content: contentFile
        }
    },
    settings:{
        outputSelection:{
            '*': {
                '*':['*']
            }
        }
    }
}

const output=JSON.parse(solc.compile(JSON.stringify(input)));
//console.log(output);
const abi=output.contracts["basico.sol"]["Basico"].abi;
//console.log("ABI: ",abi);
const bytecode=output.contracts["basico.sol"]["Basico"].evm.bytecode.object;
//console.log("Bytecode:", bytecode);

web3.eth.getTransactionCount(address1,(err,txCount)=> {
    let rawTx={
        nonce: web3.utils.toHex(txCount),
        gasLimit: web3.utils.toHex(60000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('400','gwei')),
        from: address1,
        to: null,
        data: '0x' + bytecode
    }

    const tx = new Ethereumjs(rawTx, { chain: 'rinkeby' });
    //console.log('TX: ',tx);
    tx.sign(address1Key);
    //console.log('TXSigned: ',tx);
    var serializedTx = tx.serialize();
    //console.log('TXSerialized: ',tx);
    web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
        .on('receipt', console.log);
})





