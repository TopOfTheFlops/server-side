const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const corsOptions = {
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  credentials: true
}
const passport = require('./auth/passportSetup')

const users = require('./routes/users')
const lifestyles = require('./routes/lifestyles')
const flops = require('./routes/flops')
const votes = require('./routes/votes')

const app = express()

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
