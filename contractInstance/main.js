/*
const Web3 = require('web3');
const web3 = new Web3('https://mainnet.infura.io/v3/a96943cbd5bc42389cbfb950211312c5');


//BAT token
const abiContract=[{"constant":true,"inputs":[],"name":"batFundDeposit","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"batFund","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"tokenExchangeRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"finalize","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"refund","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"tokenCreationCap","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isFinalized","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"fundingEndBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"ethFundDeposit","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"createTokens","outputs":[],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"tokenCreationMin","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"fundingStartBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"_ethFundDeposit","type":"address"},{"name":"_batFundDeposit","type":"address"},{"name":"_fundingStartBlock","type":"uint256"},{"name":"_fundingEndBlock","type":"uint256"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"LogRefund","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"CreateBAT","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}];
const addressContract='0x0D8775F648430679A709E98d2b0Cb6250d2887EF';

const myContract=new web3.eth.Contract(abiContract,addressContract);
//console.log(myContract.methods);

//Getter methods: no signed transaction needed
myContract.methods.name().call((err,result) => {
    console.log('NAME: ', result)
});

myContract.methods.totalSupply().call((err,result) => {
    console.log('TOTALSUPPLY: ', result)
});

//Getting logs
web3.eth.getBlockNumber()
    .then(n => {
        n = n- 100;
        console.log('BLOCKNUMBER: ', n);
        myContract.getPastEvents(
            'allEvents',
            {
                //filter:{_to:'.....'} //we can filter ONLY by indexed params
                fromBlock: n,
                toBlock: 'latest'
            }
        ).then(events => console.log(events))
    })

*/

//MyERC20 token CACA previously deployed from REMIX and published on ETHEREUM-TESNET-RINKEBY network
const Web3 = require('web3');
const web3 = new Web3('https://rinkeby.infura.io/v3/a96943cbd5bc42389cbfb950211312c5');

const abiContract=[{"inputs":[{"internalType":"string","name":"n","type":"string"},{"internalType":"string","name":"s","type":"string"},{"internalType":"uint8","name":"d","type":"uint8"},{"internalType":"uint256","name":"ts","type":"uint256"}],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];
const addressContract='0x3140acDe1808EA0B9382dD5325CdbAB4F4714532';

const myContract=new web3.eth.Contract(abiContract,addressContract);
//console.log(myContract.methods);


//Getter methods: no signed transaction needed
myContract.methods.name().call((err,result) => {
    //console.log('NAME: ', result)
});

myContract.methods.totalSupply().call((err,result) => {
    //console.log('TOTALSUPPLY: ', result)
});


const addressFrom= '0x8F5366A3B63e0145AdBAE3797CB6A4540421543A';
const addressTo =  '0x327957bFF0b2A41c834d3b918B060bc04868f715';
const gas = 50000;
const gasPrice = '2000000000';
web3.eth.getGasPrice()
       .then(console.log);

//we need to add the addressFrom private key to the wallet in order to sign the transaction before sending
web3.eth.accounts.wallet.add('0x50570b6ca6e292d0b53f3528d3cb763fe9c1f38aeeb8eac0ad8d962fc8ddb78b');
myContract.methods.transfer(addressTo,100).send({from: addressFrom, gas, gasPrice})
    .then(function(receipt){
        console.log(receipt);
    });
 