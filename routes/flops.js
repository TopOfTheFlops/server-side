var express = require('express')
var router = express.Router()
var getAllFlops = require('../db/db').getAllFlops
var upvoteByFlopId = require('../db/db').upvoteByFlopId
var downvoteByFlopId = require('../db/db').downvoteByFlopId
var addNewFlop = require('../db/db').addNewFlop
var deleteFlop = require('../db/db').deleteFlop
var convertToBase64 = require('../lib/imgurHandler').convertToBase64
var uploadPhoto = require('../lib/imgurHandler').uploadPhoto

/* GET users listing. */
router.get('/', function (req, res) {
  getAllFlops()
    .then(function (flops) {
      return res.json({flops})
    })
    .catch((err) => {
      res.status(500)
      console.log(err)
    })
})

//POST upvote and downvotes
router.post('/vote', ensureAuthenticated, function (req, res, next) {
  // console.log('Voting ody', req.body)
  if (req.body.action === 'upvote') {
    upvoteByFlopId(req.body.flopId)
      .then(response => {
        return res.status(201).send('Flop upvoted succesfully')
      })
      .catch(error => console.log("Error upvoting", error))
  } else if(req.body.action === 'downvote'){
    downvoteByFlopId(req.body.flopId)
      .then(response => {
        return res.status(201).send('Flop downvoted succesfully')
      })
      .catch(error => {
        console.log("Error downvoting", error)
        return res.status(500).send('Error downvoting')
      })
  }
})

//POST Create a new flop
router.post('/', ensureAuthenticated, function (req, res) {
  // console.log(req.body);
  console.log(convertToBase64(req.body.mediaFile))
  addNewFlop(req.body)
    .then(function(response) {
      return res.status(201).json({
        "success":
          {
            "message": "Flop created succesfully",
            "flopId": response[0]
          }
      })
    })
    .catch((err) => {
      res.status(500)
      console.log(err)
    })
})

//POST Remove a flop
router.post('/remove/:id', ensureAuthenticated, function (req, res) {
  deleteFlop(req.params.id)
    .then(function(response) {
      return res.status(200).send('flop deleted successfully')
    })
    .catch((err) => {
      res.status(500)
      console.log(err)
    })
})

function ensureAuthenticated (req, res, next) {
  console.log("Request user from client side:", req.user)
  console.log("Request session from client side:", req.session)
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
