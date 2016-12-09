var express = require('express')
var router = express.Router()
var getAllFlops = require('../db/db').getAllFlops
var upvoteByFlopId = require('../db/db').upvoteByFlopId

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

router.post('/vote', function (req, res) {
  console.log('Voting req.body', req.body)
  if (req.body.action === 'upvote') {
    upvoteByFlopId(req.body.flopId)
      .then(response => res.send('Success'))
      .catch(error => console.log(error))
  }
})

module.exports = router
