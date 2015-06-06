var bodyParser = require('body-parser');
var minionRegistry = require('../utils/registry');
var minion = require('../utils/minion');
var lair = require('../utils/lair');
var boss = require('../utils/boss');
var lunch = require('../utils/lunch');
var bluebird = require('bluebird');
//var promise = require('../../promise');

module.exports = function (app,express) {

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(express.static('client/public'));

    app.post('/minion', function(req, res) {
        var minionID = req.body.minionID;
        var dayOfWeek = req.body.day;

        minionRegistry.findMinion( minionID )
        .then( function( minionName ) {
            return minion.findLair(minionName);
        })
        .then( function( lairName ) {
            return lair.findBoss(lairName);
        })
        .then( function( bossName ) {
            return boss.findBossMealPlan(bossName);
        })
        .then( function( mealPlan ) {
            return lunch.findMealForDay(mealPlan, dayOfWeek);
        })
        .then(function(food){
            return res.send(food);
        });
    });
};