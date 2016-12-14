const Knex = require('knex')
const knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
const knex = Knex(knexConfig)

const getAllLifestyles = () => knex('lifestyles')

const addNewLifestyle = (newLifestyle) => knex('lifestyles').returning('lifestyleId').insert(newLifestyle)

module.exports = {
  getAllLifestyles,
  addNewLifestyle
}
