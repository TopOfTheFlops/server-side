var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var cors = require('cors')
var passport = require('./auth/passportSetup')

var users = require('./routes/users')
var lifestyles = require('./routes/lifestyles')
var flops = require('./routes/flops')

var app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(require('express-session')({ secret: 'the cake is a lie', resave: false, saveUninitialized: false }))
app.use(passport.initialize())
app.use(passport.session())

app.use('/api/v1/lifestyles', lifestyles)
app.use('/api/v1/flops', flops)
app.use('/api/v1/users', users)

module.exports = app
