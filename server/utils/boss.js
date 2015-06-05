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
      return this.bossMealPlan[bossName];
    } else {
      return new Error("No Provided Meal Plan");
    }
  }
};