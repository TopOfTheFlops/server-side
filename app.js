var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var users = require('./routes/users');
var lifestyles = require('./routes/lifestyles')
var flops = require('./routes/flops')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v1/users', users)
app.use('/api/v1/lifestyles', lifestyles)
app.use('/api/v1/flops', flops)

module.exports = app;
