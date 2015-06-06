var sleep = require('sleep');
var Promise = require('bluebird');
module.exports = {

  lairBoss: {
    "Evil Dennys": "Evil Denny",
    "The Swiss Alps" : "Angriest Saint Bernard",
    "Space" : "Nefarion the Mildly Unpleasant",
    "Dormant Volcano" : "Trogdor The Burninator",
    "Chicago" : "Orange Julius Caesar",
  },

  findBoss: function(lairName) {
    sleep.sleep(1);

    var that = this;

    return new Promise(function(resolve, reject){

      if (that.lairBoss[lairName]) {
        resolve(that.lairBoss[lairName]);
      } else {
        reject( new Error("Lair does not exist"));
      }
    });
  }
};