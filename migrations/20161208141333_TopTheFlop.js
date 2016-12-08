
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function(table){
    table.increments('id')
    table.string('username')
    table.string('name')
    table.string('password')
    table.string('image')
    table.string('bio')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
