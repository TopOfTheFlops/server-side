var bcrypt = require('bcrypt')
var saltRounds = 10

function hash (password, callback) {
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) return console.log('error hashing password')
      callback(hash)
    })
  })
}

function checkHash (password, hash, callback) {
  bcrypt.compare(password, hash, (err, res) => {
    if (err) return console.log('error checking password hash')
    callback(res)
  })
}

module.exports = {
  hash,
  checkHash
}
