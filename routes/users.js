const express = require('express')
const router = express.Router()
const hasher = require('../auth/hasher')
const getUserById = require('../db/db').getUserById
const getAllUsers = require('../db/db').getAllUsers
const signupNewUser = require('../db/db').signupNewUser
const getUserByUsername = require('../db/db').getUserByUsername

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
          signupNewUser({ username: req.body.username, password: hashedPassword, name: req.body.name, profilePic: req.body.profilePic, bio: req.body.bio})
            .then(function(response){
              return res.status(201).send("User account created")
            })
        })
        // return signupNewUser(req.body)
      }
    })
    .catch(function(err){
      res.status(500).json({error: "There was an error creating this user"})
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
});

module.exports = router;
