var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
var knex = Knex(knexConfig)

const getAllLifestyles = () => knex('lifestyles')

const getAllFlops = () => knex.select('flopId', 'lifestyleId', 'flops.userId', 'username', 'upvotes', 'downvotes', 'mediaURL', 'description').from('flops').leftJoin('users', 'flops.userId', 'users.userId')

const getAllUsers = () => knex('users')

const getUserById = (id) => knex.select('userId', 'username', 'name', 'profilePic', 'bio').from('users').where('userId', id)

const getUserByUsername = (username) => knex('users').where('username', username)

const signupNewUser = (userInfo) => knex('users').insert(userInfo)

const voteByFlopId = (voteInfo) => {
  return knex('votes')
    .then(votesArray => {
      var votePresent = votesArray.filter(vote => vote.flopId == voteInfo.flopId && vote.userId == voteInfo.userId).length > 0
      if (!votePresent) {
        return knex('votes').insert(voteInfo)
      }
      else {
        return knex('votes')
          .where(
            {flopId: voteInfo.flopId, userId: voteInfo.userId}
          )
          .update(voteInfo)
      }
    })
    .catch(error => console.log(error))
  }

const getAllVotes = () => knex('votes')

const addNewLifestyle = (newLifestyle) => knex('lifestyles').returning('lifestyleId').insert(newLifestyle)

const addNewFlop = (newFlop) => knex('flops').returning('flopId').insert(newFlop)

const deleteFlop = (flopId) => knex('flops').where('flopId', flopId).del()

const getVotesById = (id) => knex('votes').where('userId', id)




module.exports = {
  getAllLifestyles,
  getAllFlops,
  getAllUsers,
  getUserById,
  getUserByUsername,
  getVotesById,
  signupNewUser,
  voteByFlopId,
  addNewLifestyle,
  addNewFlop,
  deleteFlop,
  getAllVotes
}
