var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
var knex = Knex(knexConfig)

const getAllLifestyles = () => knex('lifestyles')

const getAllFlops = () => knex.select('flopId', 'lifestyleId', 'flops.userId', 'username', 'upvotes', 'downvotes', 'mediaURL', 'description').from('flops').leftJoin('users', 'flops.userId', 'users.userId')

const getAllUsers = () => knex('users')

const getUserById = (id) => knex.select('userId', 'username', 'name', 'profilePic', 'bio').from('users').where('userId', id)

const getUserByUsername = (username) => knex('users').where('username', username)

const signupNewUser = (userInfo) => {
  return knex('users').insert(userInfo)
}

const upvoteByFlopId = (flopId) => knex('flops').where('flopId', flopId).increment('upvotes', 1)

module.exports = {
  getAllLifestyles,
  getAllFlops,
  getAllUsers,
  getUserById,
  getUserByUsername,
  signupNewUser,
  upvoteByFlopId
}
