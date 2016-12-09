var express = require('express')
var router = express.Router()
var getAllLifestyles = require('../db/db').getAllLifestyles

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

module.exports = router
