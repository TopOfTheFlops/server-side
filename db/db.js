var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
var knex = Knex(knexConfig)

const getAllLifestyles = () => knex('lifestyles')

const getAllFlops = () => knex.select('flopId', 'lifestyleId', 'flops.userId', 'username', 'upvotes', 'downvotes', 'mediaURL', 'description').from('flops').leftJoin('users', 'flops.userId', 'users.userId')

const getAllUsers = () => knex('users')

const getUserById = (id) => knex.select('userId', 'username', 'name', 'profilePic', 'bio').from('users').where('userId', id)

const getUserByUsername = (username) => knex('users').where('username', username)

const signupNewUser = (userInfo) => knex('users').insert(userInfo)

const upvoteByFlopId = (flopId) => knex('flops').where('flopId', flopId).increment('upvotes', 1)

const downvoteByFlopId = (flopId) => knex('flops').where('flopId', flopId).increment('downvotes', 1)

const addNewLifestyle = (newLifestyle) => knex('lifestyles').returning('lifestyleId').insert(newLifestyle)

const addNewFlop = (newFlop) => knex('flops').returning('flopId').insert(newFlop)

const deleteFlop = (flopId) => knex('flops').where('flopId', flopId).del()

const getVotesById = (id) => knex('votes').where('userId', id)

const addVote = (newVote) => knex('votes').insert(newVote)



module.exports = {
  getAllLifestyles,
  getAllFlops,
  getAllUsers,
  getUserById,
  getUserByUsername,
  getVotesById,
  signupNewUser,
  upvoteByFlopId,
  downvoteByFlopId,
  addNewLifestyle,
  addNewFlop,
  deleteFlop,
  addVote
}
