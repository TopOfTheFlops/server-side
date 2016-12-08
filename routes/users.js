var express = require('express');
var router = express.Router();
const getUser = require('./db/db').getUser

/* GET users listing. */
router.get('/', function(req, res) {
  getUser
  res.json({users: [{name: 'Timmy'}]});
});

module.exports = router;
