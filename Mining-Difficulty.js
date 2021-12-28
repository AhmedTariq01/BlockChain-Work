const SHA256 = require('crypto-js/sha256');

var index = 1;
var previousHash = "12345abc223544ffacb";
var timeStamp = "12/02/2021";
var data = {
    amount: 100
};
var nonce = 0;
var difficulty = 3;
var hash = SHA256(index + previousHash + timeStamp + JSON.stringify(data) + nonce).toString();
console.log('Hash Value: ', hash);
//getting first two digits from hash
var firstTwo = hash.substring(0, difficulty);
console.log('First two digits of the hash value: ', firstTwo);

// Mining Difficulty (Solving Crypto Puzzle ) 

var targetHash = "0000000012e674e87f26cce64ca924b209a111512b3a9515b6369434268efa1e";

function calculateHash() {
    return SHA256(index + previousHash + timeStamp + JSON.stringify(data) + nonce).toString();
}
hash = calculateHash();
while (hash.substring(0, difficulty) !== targetHash.substring(0, difficulty)) {
    nonce++;
    hash = calculateHash();
}
console.log("Block Mined on Hash = " + hash + " by traversing nonce from 0 to " + nonce);