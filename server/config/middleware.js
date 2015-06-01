var bodyParser = require('body-parser');
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

  app.get('/', function(req, res) {
    // helpers.func1(function(err,result){
    //     console.log("blah");
    //   helpers.func2(function(err,result){
    //       console.log("blah");
    //     helpers.func3(function(err,result){
    //        console.log("blah");
    //       helpers.func4(function(err,result){
    //           console.log("blah");
    //         helpers.func5(function(err,result){
    //             console.log("blah");
    //           helpers.func6(function(err,result){
    //             console.log("blah");
    //           });
    //         });
    //       });
    //     });
    //   });
    // });


    res.send("GETTED it!");
  });

  app.post('/', function(req, res) {
    res.send("POSTed it!");
  });

  app.post('/minion', function(req, res) {
    console.log(req.body.name);
    res.send("POSTed it!");
  });

};