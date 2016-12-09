const express = require('express');
const router = express.Router();
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
  console.log("req.body", req.body)
  // signupNewUser(req.body)
  //   .then(function(response){
  //     console.log("user added to the db");
  //     res.send(201)
  //   })
  getUserByUsername(req.body.username)
    .then(function(user){
      if(user.length !== 0){
        throw new Error('This username is already taken')
      } else {
        return signupNewUser(req.body)
      }
    })
    .then(function(response){
      res.status(201).send("User account created")
    })
    .catch(function(err){
      res.status(500).json({error: "The username is already taken"})
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
