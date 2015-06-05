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
            
        });
    });
};