var sleep = require('sleep');
var Promise = require('bluebird');
module.exports = {

  bossMealPlan: {
    "Evil Denny": "Mariposa Yums",
    "Angriest Saint Bernard" : "Beer",
    "Nefarion the Mildly Unpleasant" : "Fleshy Fixins",
    "Trogdor The Burninator" : "Deep Fried Delicious",
    "Orange Julius Caesar" : "Fruity Fruits"
  },

  findBossMealPlan: function(bossName) {
    sleep.sleep(1);

    var that = this;

    return new Promise(function(resolve, reject){

      if (that.bossMealPlan[bossName]) {
        resolve(that.bossMealPlan[bossName]);
      } else {
        reject(new Error("No Provided Meal Plan"));
      }
    });
  }
};