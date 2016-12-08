
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('lifestyles', function(table){
    table.increments('lifestyleId')
    table.string('title')
    table.string('description')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('lifestyles')
};
