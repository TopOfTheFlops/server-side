
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('lifestyles', function(table){
    table.increments('lifestyleId')
    table.string('title')
    table.string('description')
    table.string('media')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('lifestyles')
};
