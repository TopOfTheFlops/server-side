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


var app = express()

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(require('express-session')({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false }))
app.use(passport.initialize())
app.use(passport.session())

app.use('/api/v1/lifestyles', require('./routes/lifestyles'))
app.use('/api/v1/flops', require('./routes/flops'))
app.use('/api/v1/users', require('./routes/users'))
app.use('/api/v1/votes', require('./routes/votes'))

module.exports = app

