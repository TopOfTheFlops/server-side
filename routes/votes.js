const express = require('express')
const router = express.Router()

const { getVotesById, getAllVotes, voteByFlopId } = require('../db/db')

//POST vote by flop id
router.post('/', function (req, res) {
  voteByFlopId(req.body)
    .then(response => {
      return res.status(201).send('Vote added successfully')
    })
    .catch(error => {
      console.log("Error downvoting", error)
      return res.status(500).send('Error adding vote')
    })

})

//GET all votes
router.get('/', function (req, res) {
  getAllVotes()
    .then(votes => {
      res.json(votes)
    })
    .catch(err => console.log(err))
})

//GET vote by id
router.get('/:id', function (req, res) {
  getVotesById(req.params.id)
    .then(votes => {
      var toSend = {"votes": votes}
      res.json(toSend)
    })
})


module.exports = router
