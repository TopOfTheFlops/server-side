
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('votes', function (table) {
    table.increments('voteId')
    table.integer('flopId')
    table.integer('userId')
    table.string('upOrDown')
    table.timestamps()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('votes')
};
