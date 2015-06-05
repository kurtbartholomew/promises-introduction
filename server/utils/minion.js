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
      // send null error and this.minionLair[minionName] with a callback
    } else {
      // send new error with relevant message back
      // and null result with a callback
    }
  }
};