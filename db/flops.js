const Knex = require('knex')
const knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
const knex = Knex(knexConfig)

const getAllFlops = () => knex.select('flopId', 'lifestyleId', 'flops.userId', 'username', 'mediaURL', 'description')
                              .from('flops')
                              .leftJoin('users', 'flops.userId', 'users.userId')

const addNewFlop = (newFlop) => knex('flops').returning('flopId').insert(newFlop)

const deleteFlop = (flopId) => knex('flops').where('flopId', flopId).del()

module.exports = {
  getAllFlops,
  addNewFlop,
  deleteFlop
}
