var sleep = require('sleep');
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
    if (this.lairBoss[lairName]) {
      // send null error and this.lairBoss[lairName] with a callback
    } else {
      // send new error with relevant message back
      // and null result with a callback
    }
  }
};