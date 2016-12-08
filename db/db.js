var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
var knex = Knex(knexConfig)

function getAllLifestyles() {
  return knex('lifestyles')
}

function getAllPosts() {
  return knex('posts')
}

module.exports = {
  getAllLifestyles,
  getAllPosts
}
