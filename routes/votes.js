const express = require('express')
const router = express.Router()

const { getVotesById, voteByFlopId } = require('../db/db')

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

router.get('/:id', function (req, res) {
  getVotesById(req.params.id)
    .then(votes => {
      var toSend = {"votes": votes}
      res.json(toSend)
    })
})


module.exports = router
