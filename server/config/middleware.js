//var helpers = require('helpers');
//var bluebird = require('bluebird');
//var promise = require('../../promise');

module.exports = function ( app, express ) {

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
  });


  res.send("GETTED it!");
  });

  app.post('/', function(req, res) {
    res.send("POSTed it!");
  });

};