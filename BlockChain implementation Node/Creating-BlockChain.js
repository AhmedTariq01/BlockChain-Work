const SHA256 = require('crypto-js/sha256');

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

// Creating a  block chain 
class Blockchain{
    // Checking if Chain valid
    isChainValid(){
        for (let i=1;i<this.chain.length;i++){
            const currentBlock=this.chain[i];
            const previousBlock=this.chain[i-1];
            if (currentBlock.hash!=currentBlock.calculateHash())
                console.log('Chain is not valid')
            if(currentBlock.previoushash!=previousBlock.hash)
                console.log('Chain is not valid')
            }
        return true
        }
    // Creating a constructor
    constructor(){ this.chain=[this.createGenesisBlock()]; }
    createGenesisBlock(){return new Block(0,'09/02/2021',"Wellcome","0"); }
    getLatestBlock(){
    return this.chain[this.chain.length-1];
    }
    // add block function
    addBlock(newBlock){
    newBlock.previoushash=this.getLatestBlock().hash;
    newBlock.hash=newBlock.calculateHash();
    this.chain.push(newBlock);
    }
} 

// Adding blocks
myBitcoin =new Blockchain();
myBitcoin.addBlock(new Block(1,"09/02/2021",{amount:4000}));
myBitcoin.addBlock(new Block(2,"09/02/2021",{amount:100000}));
console.log(JSON.stringify(myBitcoin,null,4));
console.log("Is Blockchain is Valid ?"+myBitcoin.isChainValid());
// Attack on first block data
myBitcoin.chain[1].data={amount:200};
//console.log(JSON.stringify(myBitcoin,null,4));
console.log("Is Blockchain is Valid ?"+myBitcoin.isChainValid());
