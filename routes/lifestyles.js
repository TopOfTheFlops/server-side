const express = require('express')
const router = express.Router()
const { getAllLifestyles, addNewLifestyle, deleteLifestyle } = require('../db/lifestyles')
const { successMessage, errorMessage } = require('../db/responses')


const ensureAuthenticated  = (req, res, next) => {
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

// GET all lifestyles
router.get('/', (req, res) => {
  getAllLifestyles()
    .then(lifestyles => res.json({lifestyles}))
    .catch(err => res.status(500)
      .json(errorMessage('Unable to retreive lifestyles'))
  )
})

//POST a new lifestyle
router.post('/', ensureAuthenticated, (req, res) => {
  addNewLifestyle(req.body)
    .then(response => res.status(201).json({
        "success":
          {
            "message": "Lifestyle board created succesfully",
            "lifestyleId": response[0]
          }
      })
    )
    .catch(err => res.status(500)
      .json(errorMessage('Unable to add lifestyle to db'))
  )
})

//DELETE a lifestyle
router.post('/remove/:id', ensureAuthenticated, (req, res) => {
  deleteLifestyle(req.params.id)
    .then(response => res.status(200)
      .json(successMessage('lifestyle deleted successfully'))
    )
    .catch(err => res.status(500)
      .json(errorMessage('Unable to remove lifestyle'))
  )
})

module.exports = router
