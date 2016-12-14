const express = require('express')
const router = express.Router()
const { getAllLifestyles, addNewLifestyle } = require('../db/lifestyles')
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

/* GET users listing. */
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


module.exports = router
