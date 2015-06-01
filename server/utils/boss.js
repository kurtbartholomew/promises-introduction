module.exports = {

  bossMealPlan: {
    "Evil Denny": "Mariposa Yums",
    "Angriest Saint Bernard" : "Beer",
    "Nefarion the Mildly Unpleasant" : "Fleshy Fixins",
    "Trogdor The Burninator" : "Deep Fried Delicious",
    "Orange Julius Caesar" : "Fruity Fruits"
  },

  findBossMealPlan: function(bossName, callback) {
    if (this.bossMealPlan[bossName]) {
      callback(null,this.bossMealPlan[bossName]);
    } else {
      callback(new Error("No Provided Meal Plan"), null);
    }
  }
};