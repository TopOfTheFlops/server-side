var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
var knex = Knex(knexConfig)

const getAllLifestyles = () => knex('lifestyles')


const getAllFlops = () => knex('flops')


const getUser = (id) => knex('users').where('userId', id)

module.exports = {
  getAllLifestyles,
  getAllFlops,
  getUser
}
