
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('flops').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('flops').insert({id: 1, lifestyleId: 1, flopperId: 1, upvote: 2, downvote: 1, media: 'asdfagskld'}),
        knex('flops').insert({id: 2, lifestyleId: 2, flopperId: 2, upvote: 5, downvote: 1, media: 'dklagj'})
      ]);
    });
};
