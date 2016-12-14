const Knex = require('knex')
const knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
const knex = Knex(knexConfig)

const getAllVotes = () => knex('votes')

const getVotesById = (id) => knex('votes').where('userId', id)

const voteByFlopId = (voteInfo) => {
  return knex('votes')
    .then(votesArray => {
      const votePresent = votesArray.filter(vote => vote.flopId == voteInfo.flopId && vote.userId == voteInfo.userId).length > 0
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

module.exports = {
  getAllVotes,
  getVotesById,
  voteByFlopId
}
