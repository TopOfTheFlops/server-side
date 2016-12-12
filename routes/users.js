const express = require('express')
const router = express.Router()
const hasher = require('../auth/hasher')
const passport = require('../auth/passportSetup')
const Passport = require('passport')
const { getUserById, getAllUsers, signupNewUser, getUserByUsername, editUserById } = require('../db/db')

//GET to logout an user
router.get('/logout', function(req, res){
  req.logOut()
  req.session.destroy(function (err) {
    res.send('User logged out')
  })
})

//GET all users
router.get('/', function (req, res) {
  getAllUsers()
    .then(response => {
      var users = {
        users: response
      }
      res.json(users)
    })
    .catch(error => {
      res.status(500).send('Could not get all users')
    })
})

// POST to create a new user
router.post('/signup', function (req, res) {
  getUserByUsername(req.body.username)
    .then(function(user){
      if(user.length !== 0){
        throw new Error('This username is already taken')
      } else {
        hasher.hash(req.body.password, function (hashedPassword){
          signupNewUser({ username: req.body.username, password: hashedPassword, name: req.body.name, profilePic: req.body.profilePic, bio: req.body.bio, location: req.body.location})
            .then(function(response){
              return res.status(201).send("User account created")
            })
        })
      }
    })
    .catch(function(err){
      res.status(500).json({error: "There was an error creating this user"})
    })
})


//POST to login
router.post('/login', passport.authenticate('local'), function (req, res) {
  getUserByUsername(req.body.username)
    .then(function(user){
      res.json({ user: user[0]})
    })
    .catch(function(error){
      res.json({error: "Error retrieving user from db"})
    })
})

//POST to edit user profile
router.post('/edit/:id', ensureAuthenticated, function(req, res) {
  hasher.hash(req.body.password, function(hashedPassword){
    var newValues = {
      password: hashedPassword,
      profilePic: req.body.profilePic,
      bio: req.body.bio,
      location: req.body.location
    }
    editUserById(req.params.id, newValues)
      .then(function (user) {
        return getUserById(req.params.id)
      })
      .then(function (user) {
        res.status(201).json({success: 'Update was successful', user: user[0]})
      })
      .catch(function (error) {
        res.status(500).json({error: "Error updating user"})
      })
  })
})

/* GET users listing. */
router.get('/:id', function(req, res) {
  getUserById(req.params.id)
  .then(response => {
    var user = {
      user: response[0]
    }
    res.json(user)
  })
  .catch(error => {
    res.status(500).send('Could not get user by id')
  })
})

function ensureAuthenticated (req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  return res.json({
    "error":
      {
        "type": "auth",
        "code": 401,
        "message": "authentication failed"
      }
  })
}

module.exports = router
