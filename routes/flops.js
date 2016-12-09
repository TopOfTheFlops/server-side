var express = require('express')
var router = express.Router()
var getAllFlops = require('../db/db').getAllFlops
var upvoteByFlopId = require('../db/db').upvoteByFlopId
var downvoteByFlopId = require('../db/db').downvoteByFlopId
var addNewFlop = require('../db/db').addNewFlop

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
router.post('/vote', function (req, res) {
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

router.post('/', function (req, res) {
  // console.log(req.body);
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

module.exports = router
