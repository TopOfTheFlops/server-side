
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('posts', function(table){
    table.increments('id')
    table.integer('lifestyleId')
    table.integer('flopperId')
    table.integer('score')
    table.string('media')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('posts')
};
