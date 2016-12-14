const express = require('express')
const router = express.Router()
const { getAllFlops, addNewFlop, deleteFlop } = require('../db/flops')
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

/* GET all flops */
router.get('/', (req, res) => {
  getAllFlops()
    .then(flops => res.json({flops}))
    .catch(err => res.status(500)
      .json(errorMessage('Could not retreive all flops'))
  )
})

//POST Create a new flop
router.post('/', ensureAuthenticated, (req, res) => {
  addNewFlop(req.body)
    .then(response => {
      res.status(201).json({
        "success":
          {
            "message": "Flop created succesfully",
            "flopId": response[0]
          }
      })
    })
    .catch(err => res.status(500)
      .json(errorMessage('Unable to create new flop'))
  )
})

//POST Remove a flop
router.post('/remove/:id', ensureAuthenticated, (req, res) => {
  deleteFlop(req.params.id)
    .then(response => res.status(200)
      .json(successMessage('flop deleted successfully'))
    )
    .catch(err => res.status(500)
      .json(errorMessage('Unable to remove flop'))
  )
})


module.exports = router
