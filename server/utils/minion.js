var sleep = require('sleep');
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

  findLair: function(minionName) {
    sleep.sleep(1);
    if (this.minionLair[minionName]) {
      return this.minionLair[minionName];
    } else {
      return new Error("Invalid Minion Name");
    }
  }
};