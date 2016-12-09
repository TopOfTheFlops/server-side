
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('flops', function (table) {
    table.increments('flopId')
    table.integer('lifestyleId')
    table.integer('userId')
    table.integer('upvotes').defaultTo(0)
    table.integer('downvotes').defaultTo(0)
    table.string('mediaURL')
    table.string('description')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('flops')
}
