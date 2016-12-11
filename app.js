var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var cors = require('cors')
var corsOptions = {
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  credentials: true
}
var passport = require('./auth/passportSetup')

var users = require('./routes/users')
var lifestyles = require('./routes/lifestyles')
var flops = require('./routes/flops')
var votes = require('./routes/votes')

var app = express()

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(require('express-session')({ secret: 'the cake is a lie', resave: false, saveUninitialized: false }))
app.use(passport.initialize())
app.use(passport.session())

app.use('/api/v1/lifestyles', lifestyles)
app.use('/api/v1/flops', flops)
app.use('/api/v1/users', users)
app.use('/api/v1/votes', votes)

module.exports = app
