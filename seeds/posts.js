
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('flops').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('flops').insert({id: 1, lifestyleId: 1, userId: 1, upvotes: 2, downvotes: 1, mediaURL: 'asdfagskld'}),
        knex('flops').insert({id: 2, lifestyleId: 2, userId: 2, upvotes: 5, downvotes: 1, mediaURL: 'dklagj'})
      ]);
    });
};
