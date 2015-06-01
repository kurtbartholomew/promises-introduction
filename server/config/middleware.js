var bodyParser = require('body-parser');
var minionRegistry = require('../utils/registry');
var minion = require('../utils/minion');
var lair = require('../utils/lair');
var boss = require('../utils/boss');
var lunch = require('../utils/lunch');
//var bluebird = require('bluebird');
//var promise = require('../../promise');

module.exports = function (app,express) {

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(express.static('client/public'));

    app.post('/minion', function(req, res) {
        console.log(req.body);

        var minionID = req.body.minionID;
        var dayOfWeek = req.body.day;

        minionRegistry.findMinion(minionID, function(err, minionName){
              console.log("Finished finding minion", minionName);
              //if(err) { res.send(err) }
            minion.findLair(minionName, function(err, lairName) {
                  console.log("Finished finding lair", lairName);
                  //if(err) { res.send(err) }
                lair.findBoss(lairName, function(err, bossName) {
                    console.log("Finished finding boss", bossName);
                    //if(err) { res.send(err) }
                    boss.findBossMealPlan(bossName, function(err, mealPlan) {
                        console.log("Finished finding meal plan", mealPlan);
                        //if(err) { res.send(err) }
                        lunch.findMealForDay(mealPlan, dayOfWeek, function(err, food){
                            console.log("Finished finding lunch", food);
                            //if(err) { res.send(err) }
                            console.log(food);
                            res.send(food);
                        });
                    });
                });
            });
        });
    });
};