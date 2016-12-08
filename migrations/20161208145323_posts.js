
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('flops', function(table){
    table.increments('id')
    table.integer('lifestyleId')
    table.integer('flopperId')
    table.integer('upvote')
    table.integer('downvote')
    table.string('media')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('flops')
};
