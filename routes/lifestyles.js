var express = require('express')
var router = express.Router()
var getAllLifestyles = require('../db/db').getAllLifestyles
var addNewLifestyle = require('../db/db').addNewLifestyle

/* GET users listing. */
router.get('/', function (req, res) {
  getAllLifestyles()
  .then(function (lifestyles) {
    return res.json({lifestyles})
  })
  .catch((err) => {
    res.status(500)
    console.log(err)
  })
})

//POST a new lifestyle
router.post('/', ensureAuthenticated, function (req, res) {
  // console.log(req.body);
  addNewLifestyle(req.body)
    .then(function(response) {
      return res.status(201).json({
        "success":
          {
            "message": "Lifestyle board created succesfully",
            "lifestyleId": response[0]
          }
      })
    })
    .catch((err) => {
      res.status(500)
      console.log(err)
    })
})

function ensureAuthenticated (req, res, next) {
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
