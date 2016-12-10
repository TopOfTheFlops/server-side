var passport = require('passport')
var Strategy = require('passport-local').Strategy
var hasher = require('./hasher')

var db = require('../db/db')

passport.use(new Strategy(function (username, password, done){
  db.getUserByUsername(username)
    .then(function(user){
      if(user.length === 0){
        done(null, false, { message: 'Incorrect username'})
      } else {
        hasher.checkHash(password, user[0].password, function(valid){
          if(valid){
            done(null, user[0])
          } else {
            done(null, false, { message: 'Incorrect password'})
          }
        })
      }
    })
    .catch(function(err){
      console.log('Error connecting to the database', err)
      done(err)
    })
}))

passport.serializeUser(function(user, done){
  done(null, user.userId)
})

passport.deserializeUser(function (id, done){
  db.getUserById(id)
    .then(function(user){
      done(null, user[0])
    })
    .catch(function(err){
      console.log('Error retrieving the deserialized user from the DB')
      done(err)
    })
})

module.exports = passport
