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
router.post('/', function (req, res) {
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

module.exports = router
