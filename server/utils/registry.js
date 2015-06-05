var sleep = require('sleep');
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

  findMinion: function(minionId, callback) {
    sleep.sleep(1);
    if (this.minionRegistry[minionId]) {
      return this.minionRegistry[minionId];
    } else {
      return new Error("Minion is unregistered. They must die!!");
    }
  }
};