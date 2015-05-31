var express = require('express');
var app = express();
app.get('/', function(req, res) {
  res.send("GETTED it!");
});

app.post('/', function(req, res) {
  res.send("POSTed it!");
});

module.exports = app;