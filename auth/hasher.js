const bcrypt = require('bcrypt')
const saltRounds = 10

const hash = (password, callback) => {
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) return console.log('Error hashing password')
      callback(hash)
    })
  })
}

const checkHash = (password, hash, callback) => {
  bcrypt.compare(password, hash, (err, res) => {
    if (err) return console.log('Error comparing password hash')
    callback(res)
  })
}

module.exports = {
  hash,
  checkHash
}
