
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('lifestyles', function(table){
    table.increments('id')
    table.string('name')
    table.string('description')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('lifestyles')
};
