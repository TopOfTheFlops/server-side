var express = require('express')
var router = express.Router()
var getAllFlops = require('../db/db').getAllFlops

/* GET users listing. */
router.get('/', function(req, res) {
  getAllFlops()
  .then(function(flops){
    return res.json({flops})
  })
  .catch((err) => {
    if (err) console.log(err)
  })
});

module.exports = router;
