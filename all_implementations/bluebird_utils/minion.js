var sleep = require('sleep');
var Promise = require('bluebird');
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

    var that = this;

    return new Promise(function(resolve, reject){

      if (that.minionLair[minionName]) {
        resolve(that.minionLair[minionName]);
      } else {
        reject(new Error("Invalid Minion Name"));
      }
    });
  }
};