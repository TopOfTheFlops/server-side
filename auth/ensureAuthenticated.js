const express = require('express')
const router = express.Router()

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  }
  res.json({
    "error":
      {
        "type": "auth",
        "code": 401,
        "message": "authentication failed"
      }
  })
}

module.exports = ensureAuthenticated
