var sleep = require('sleep');
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
    if (this.bossMealPlan[bossName]) {
      // send null error and this.bossMealPlan[bossName] with a callback
    } else {
      // send new error with relevant message back
      // and null result with a callback
    }
  }
};