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
    "Steve" : "Evil Denniys" 
  },

  findLair: function(minionName) {
    if (minionLair[minionName]) {
      return minionLair[minionName];
    } else {
      throw Error("Invalid Minion Name");
    }
  }
};