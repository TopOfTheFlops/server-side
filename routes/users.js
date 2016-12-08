var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.json({users: [{name: 'Timmy'}]});
});

module.exports = router;
