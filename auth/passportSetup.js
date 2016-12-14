const passport = require('passport')
const Strategy = require('passport-local').Strategy
const hasher = require('./hasher')

const { getUserByUsername, getUserById } = require('../db/users')

passport.use(new Strategy((username, password, done) => {
  getUserByUsername(username)
    .then(user => {
      if(user.length === 0){
        done(null, false, { message: 'Incorrect username'})
      } else {
        hasher.checkHash(password, user[0].password, (valid) => {
          if(valid){
            done(null, user[0])
          } else {
            done(null, false, { message: 'Incorrect password'})
          }
        })
      }
    })
    .catch(err => {
      console.log('Error connecting to the database', err)
      done(err)
    })
}))

passport.serializeUser((user, done) => {
  done(null, user.userId)
})

passport.deserializeUser((id, done) => {
  getUserById(id)
    .then(user => done(null, user[0]))
    .catch(err => {
      console.log('Error retrieving the deserialized user from the DB')
      done(err)
    })
})

module.exports = passport
