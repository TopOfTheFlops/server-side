const express = require('express')
const router = express.Router()

const { successMessage, errorMessage } = require('../db/responses')
const { getVotesById, getAllVotes, voteByFlopId } = require('../db/votes')

//POST vote by flop id
router.post('/', (req, res) => {
  voteByFlopId(req.body)
    .then(response => res.status(201)
        .json(successMessage('Vote added successfully'))
    )
    .catch(error => res.status(500)
        .json(errorMessage('Error adding vote'))
    )
})

//GET all votes
router.get('/', (req, res) => {
  getAllVotes()
    .then(votes => res.json(votes))
    .catch(err => res.status(500)
      .json(errorMessage('Error retrieving votes'))
    )
})

//GET vote by id
router.get('/:id', (req, res) => {
  getVotesById(req.params.id)
    .then(votes => {
      const toSend = {"votes": votes}
      res.json(toSend)
    })
    .catch(err => res.status(500)
      .json(errorMessage('Error retrieving vote'))
    )
})


module.exports = router
