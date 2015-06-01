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
              if(err) { return res.status(404).send(err.message) }
            minion.findLair(minionName, function(err, lairName) {
                  if(err) { return res.status(404).send(err.message) }
                lair.findBoss(lairName, function(err, bossName) {
                    if(err) { return res.status(404).send(err.message) }
                    boss.findBossMealPlan(bossName, function(err, mealPlan) {
                        if(err) { return res.status(404).send(err.message) }
                        lunch.findMealForDay(mealPlan, dayOfWeek, function(err, food){
                            if(err) { return res.status(404).send(err.message); }
                            res.send(food);
                        });
                    });
                });
            });
        });
    });
};