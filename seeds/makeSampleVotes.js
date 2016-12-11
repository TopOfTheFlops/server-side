
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('votes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('votes').insert({voteId: 1, userId: 1, flopId: 1, upOrDown: 'up'}),
        knex('votes').insert({voteId: 2, userId: 1, flopId: 2, upOrDown: 'up'}),
        knex('votes').insert({voteId: 3, userId: 1, flopId: 3, upOrDown: 'up'})
      ]);
    });
};
