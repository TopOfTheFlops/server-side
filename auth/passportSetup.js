var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy

module.exports = function setup () {
  var strategy = new LocalStrategy(function (username, password, done) {
    var user = users.find(function (user) {
      return user.username === username && user.password === password
    })
    return done(null, user)
  })

  passport.use(strategy)

  // how do I go from a given user to unique piece of info I can store in the cookie.
  passport.serializeUser(function (user, done) {
    done(null, user.id)
  })

  // how do I find a user given the piece of information stored in the cookie
  passport.deserializeUser(function (id, done) {
    done(null, users.find(function (user) {
      return user.id === id
    }))
  })
}
