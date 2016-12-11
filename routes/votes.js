const express = require('express')
const router = express.Router()

const getVotesById = require('../db/db').getVotesById
const addVote = require('../db/db').addVote

router.post('/', function (req, res) {
  addVote(req.body)
    .then(response => {
      return res.status(201).send('Vote added successfully')
    })
    .catch(error => {
      console.log("Error downvoting", error)
      return res.status(500).send('Error adding vote')
    })

})

router.get('/:id', function (req, res) {
  getVotesById(req.params.id)
    .then(votes => {
      var toSend = {"votes": votes}
      res.json(toSend)
    })
})


module.exports = router
