
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('votes', function (table) {
    table.increments('voteId')
    table.integer('flopId')
    table.integer('userId')
    table.integer('upvote').defaultTo(0)
    table.integer('downvote').defaultTo(0)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('votes')
};
