var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
var knex = Knex(knexConfig)

const getAllLifestyles = () => knex('lifestyles')

const getAllFlops = () => knex('flops')

const getAllUsers = () => knex('users')

const getUserById = (id) => knex.select('userId', 'username', 'name', 'profilePic', 'bio').from('users').where('userId', id)

module.exports = {
  getAllLifestyles,
  getAllFlops,
  getAllUsers,
  getUserById
}
