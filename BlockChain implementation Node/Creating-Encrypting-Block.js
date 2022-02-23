const SHA256 = require('crypto-js/sha256');

console.log('Encrypting the value and displaying it in JSON format: ', SHA256("BlockChain"));

// Here toString has been used to convert JSON output into string 
console.log('Displaying the value in 64 bit hash value: ' ,SHA256("BlockChain").toString());

//  Creating a calculate hash function
function calculateHash() {
    return SHA256("apple").toString();
    }
    console.log('Displaying the value in 64 bit hash value: ', calculateHash());

// Creating an object to store data in JSON format
var obj = {
name: "AhmedTariq",
amount: 1000,
phoneNo: "0123456789"
};

console.log('User Data: ' ,JSON.stringify(obj));

//  creating a block
class Block{
    constructor (index, timeStamp, data, hash, previousHash=''){
    this.index=index;
    this.timeStamp=timeStamp;
    this.data=data;
    this.previousHash=previousHash;
    this.hash=hash;
    }
    // function to calculate hash value
    calculateHash() {
        return SHA256(this.index+ this.timestamp + this.previoushash + JSON.stringify(this.data)).toString();
        }
    }

myblock= new Block(1,"11/02/2021","Sampledata","11f1a3411312121","1c44dffaa213fff44");
console.log('Displaying the Block without encryption: ', myblock);
console.log('Displaying the block in JSON format:', JSON.stringify(myblock,null,4));

