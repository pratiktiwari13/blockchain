const crypto = require("crypto");

function Block(index,data,prevHash){
    
    /*let blockObject;
    
    if(!(this instanceof Block)){
        Object.bind(blockObject)   
    }
    else{
        delete blockObject;
    }*/
       
    this.index = index;
    this.data = data;
    this.prevHash = prevHash;
    this.timeStamp = Math.floor(Date.now() / 1000);
    
    this.getHash = function(){
        const hash = crypto.createHash('sha256');
        hash.update(this.index + JSON.stringify(this.data) + this.prevHash + this.timeStamp);
        return hash.digest('hex');
    }
    
    //return blockObject;
}

module.exports = Block;