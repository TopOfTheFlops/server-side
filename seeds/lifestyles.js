
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lifestyles').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('lifestyles').insert({lifestyleId: 1, title: 'lasanga', description: 'Have you ever felt unappreciated after cooking a great lasanga? This is the lifestyle for you, show it off!', media: 'http://placekitten.com/g/300/300'}),
        knex('lifestyles').insert({lifestyleId: 2, title: 'cup-stack', description: 'See how fast you can stack em up', media: 'http://placekitten.com/g/300/300'})
      ])
    })
}
