
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lifestyles').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('lifestyles').insert({id: 1, name: 'lasanga', description: 'Have you ever felt unappreciated after cooking a great lasanga? This is the lifestyle for you, show it off!'}),
        knex('lifestyles').insert({id: 2, name: 'cup-stack', description: 'See how fast you can stack em up'})
      ]);
    });
};
