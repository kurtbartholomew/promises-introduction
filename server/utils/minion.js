module.exports = {

  minionLair: {
    "Crash": "Evil Dennys",
    "Roadburn" : "The Swiss Alps",
    "Rush" : "Space",
    "Nitro" : "Space",
    "Starslash" : "Dormant Volcano",
    "Marius" : "Chicago",
    "Darius" : "Chicago",
    "Tarius" : "Chicago",
    "Steve" : "Evil Dennys" 
  },

  findLair: function(minionName, callback) {
    
    if (this.minionLair[minionName]) {
      callback(null,this.minionLair[minionName]);
    } else {
      callback(new Error("Invalid Minion Name"),null);
    }
  }
};