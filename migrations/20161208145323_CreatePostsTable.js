
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('flops', function (table) {
    table.increments('flopId')
    table.integer('lifestyleId')
    table.integer('userId')
    table.integer('upvotes')
    table.integer('downvotes')
    table.string('mediaURL')
    table.string('description')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('flops')
}
