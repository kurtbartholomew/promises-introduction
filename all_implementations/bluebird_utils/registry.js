var sleep = require('sleep');
var Promise = require('bluebird');
module.exports = {

  minionRegistry: {
    1: "Crash",
    2: "Roadburn",
    3: "Rush",
    4: "Nitro",
    5: "Starslash",
    6: "Marius",
    7: "Darius",
    8: "Tarius",
    9: "Steve" 
  },

  findMinion: function(minionId) {
      sleep.sleep(1);

    var that = this;

    return new Promise(function(resolve, reject){

      if (that.minionRegistry[minionId]) {
        resolve(that.minionRegistry[minionId]);
      } else {
        reject(new Error("You are unregistered. Report to the shark tanks!"));
      }
    });
  }
};