var sleep = require('sleep');
var Promise = require('bluebird');
module.exports = {

  mealPlanSchedule: {
    "Mariposa Yums": {
      "Monday":"Pancakes",
      "Tuesday":"Broccoli",
      "Wednesday":"Burgers",
      "Thursday":"Burgers",
      "Friday":"Ribs",
      "Saturday":"Chicken",
      "Sunday":"Nothing",
    },
    "Beer" : {
      "Monday":"Beer",
      "Tuesday":"Beer",
      "Wednesday":"Beer",
      "Thursday":"Beer",
      "Friday":"Beer",
      "Saturday":"Beer",
      "Sunday":"Beer",
    },
    "Fleshy Fixins" : {
      "Monday":"Heart",
      "Tuesday":"Lung",
      "Wednesday":"Kidney",
      "Thursday":"Tongue",
      "Friday":"Brain",
      "Saturday":"Stomach",
      "Sunday":"Heart",
    },
    "Deep Fried Delicious" : {
      "Monday":"Deep Fried Oreo",
      "Tuesday":"Deep Fried Gator",
      "Wednesday":"Deep Fried Butter",
      "Thursday":"Deep Fried Chicken",
      "Friday":"Deep Fried Shoe Leather",
      "Saturday":"Deep Fried Potatoes",
      "Sunday":"Deep Fried Steak",
    },
    "Fruity Fruits" : {
      "Monday":"Oranges",
      "Tuesday":"Bananas",
      "Wednesday":"Kumquats",
      "Thursday":"Apples",
      "Friday":"Watermelons",
      "Saturday":"Tomatoes",
      "Sunday":"Nothing",
    },
  },

  findMealForDay: function(mealPlanProvider, weekDay) {
    sleep.sleep(1);

    var that = this;

    return new Promise(function(resolve, reject){

      if (that.mealPlanSchedule[mealPlanProvider][weekDay]) {
        resolve(that.mealPlanSchedule[mealPlanProvider][weekDay]);
      } else {
        reject( new Error("That's not a day of the week, you fool! Report to the shark tanks!"));
      }
    });
  }
};