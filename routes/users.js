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
  getUserByUsername(req.body.username)
    .then(function(user){
      console.log("Inside the getUserByUsername function");
      if(user.length !== 0){
        res.send("Username already exists")
      } else {
        console.log('Inside the else statement');
        signupNewUser(req.body)
      }
    })
    .then(function(){
      console.log("Inside the signupNewUser function");
      // console.log(dbRes);
      res.status(201).send("User account created")
    })
    .catch(function(err){
      res.status(500).send(err)
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
