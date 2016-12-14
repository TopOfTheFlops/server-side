const express = require('express')
const router = express.Router()

const Passport = require('passport')
const hasher = require('../auth/hasher')
const passport = require('../auth/passportSetup')

const { getUserById, getAllUsers, signupNewUser, getUserByUsername, editUserById } = require('../db/users')
const { successMessage, errorMessage } = require('../db/responses')

const ensureAuthenticated = (req, res, next) => {
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

//GET to logout an user
router.get('/logout', (req, res) => {
  req.logOut()
  req.session.destroy(err => res.json(successMessage('User logged out')))
})

//GET all users
router.get('/', ensureAuthenticated, (req, res) => {
  getAllUsers()
    .then(response => {
      const users = {
        users: response
      }
      res.json(users)
    })
    .catch(error => res.status(500)
      .json(errorMessage('Could not get all users')))
})

// POST to create a new user
router.post('/signup', (req, res) => {
  getUserByUsername(req.body.username)
    .then(user => {
      if(user.length !== 0){
        throw new Error('This username is already taken')
      } else {
        hasher.hash(req.body.password, (hashedPassword) => {
          signupNewUser({
            username: req.body.username,
            password: hashedPassword,
            name: req.body.name,
            profilePic: req.body.profilePic,
            bio: req.body.bio,
            location: req.body.location
          })
            .then(response => res.status(201)
              .json(successMessage('User account created'))
            )
        })
      }
    })
    .catch(err => res.status(500)
      .json(errorMessage('There was an error creating this user'))
    )
})


//POST to login
router.post('/login', passport.authenticate('local'), (req, res) => {
  getUserByUsername(req.body.username)
    .then(user => res.json({ user: user[0]}))
    .catch(error => res.json(errorMessage('Error retrieving user from db')))
})

//POST to edit user profile
router.post('/edit/:id', ensureAuthenticated, (req, res) => {
  hasher.hash(req.body.password, hashedPassword => {
    const newValues = {
      password: hashedPassword,
      profilePic: req.body.profilePic,
      bio: req.body.bio,
      location: req.body.location
    }
    editUserById(req.params.id, newValues)
      .then(user => getUserById(req.params.id))
      .then(user => res.status(201)
        .json({success: 'Update was successful', user: user[0]})
      )
      .catch(error => res.status(500)
        .json(errorMessage('Error updating user'))
    )
  })
})

/* GET users listing. */
router.get('/:id', (req, res) => {
  getUserById(req.params.id)
  .then(response => {
    const user = {
      user: response[0]
    }
    res.json(user)
  })
  .catch(error => res.status(500)
    .json(errorMessage('Could not get user by id'))
  )
})


module.exports = router
