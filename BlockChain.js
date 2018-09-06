const Block = require("./Block");

function BlockChain(){
    this.chain = [];
    
    this.addBlock = function(data){
        
        let index = this.chain.length;
        let prevHash = this.chain.length !== 0 ? this.chain[this.chain.length - 1].hash : 0;
        let block = new Block(index,data,prevHash);\
        
        this.chain.push(block);
    }
    
    this.verifyBlockChain = function(){
        
        for(let i = 0; i<this.chain.length; i++){
            
            if(this.chain[i].hash !== this.hash[i].getHash()){
                return false;
            }
            
            if(this.chain[i].prevHash !== this.chain[i-1].hash){
                return false;
            }
        }
        return true;
    }
    
}