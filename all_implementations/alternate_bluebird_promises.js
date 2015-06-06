var Promise = require('bluebird');
var bodyParser = require('body-parser');
var minionRegistry = Promise.promisifyAll(require('../utils/registry'));
var minion = Promise.promisifyAll(require('../utils/minion'));
var lair = Promise.promisifyAll(require('../utils/lair'));
var boss = Promise.promisifyAll(require('../utils/boss'));
var lunch = Promise.promisifyAll(require('../utils/lunch'));
//var promise = require('../../promise');

module.exports = function (app,express) {

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(express.static('client/public'));

    app.post('/minion', function(req, res) {
        console.log(req.body);

        var minionID = req.body.minionID;
        var dayOfWeek = req.body.day;

        minionRegistry.findMinionAsync(minionID)
          .then(minion.findLairAsync.bind(minion))
          .then(lair.findBossAsync.bind(lair))
          .then(boss.findBossMealPlanAsync.bind(boss))
          .then(lunch.findMealForDayAsync.bind(lunch, dayOfWeek))
          .then(res.send.bind(res))
          .catch(console.error.bind(console));

    });
};