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
    if (this.minionRegistry[minionId]) {
      callback(null, this.minionRegistry[minionId]);
    } else {
      callback(new Error("Minion is unregistered. They must die!!"),null);
    }
  }
};