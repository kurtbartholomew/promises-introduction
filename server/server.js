var express = require('express');
var app = express();

require('./config/middleware.js')(app,express);

module.exports = app;