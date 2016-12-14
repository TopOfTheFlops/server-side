const Knex = require('knex')
const knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
const knex = Knex(knexConfig)

const getAllUsers = () => knex.select('userId', 'username', 'name', 'location', 'profilePic', 'bio').from('users')

const getUserById = (id) => knex.select('userId', 'username', 'name', 'location', 'profilePic', 'bio')
                                .from('users')
                                .where('userId', id)

const getUserByUsername = (username) => knex('users').where('username', username)

const signupNewUser = (userInfo) => knex('users').insert(userInfo)

const editUserById = (id, values) => knex('users').where('userId', id).update(values)

module.exports = {
  getAllUsers,
  getUserById,
  getUserByUsername,
  signupNewUser,
  editUserById
}
