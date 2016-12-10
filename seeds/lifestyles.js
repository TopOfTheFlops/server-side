
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lifestyles').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('lifestyles').insert({lifestyleId: 1, title: 'Most aesthetically pleasing lasanga', description: 'Have you ever felt unappreciated after cooking a great lasanga? This is the lifestyle for you, show it off!', media: 'https://static01.nyt.com/images/2015/10/15/dining/15RECIPE20DIN/15RECIPE20DIN-superJumbo.jpg'}),
        knex('lifestyles').insert({lifestyleId: 2, title: 'Fastest cup-stacker', description: 'See how fast you can stack em up', media: 'http://i0.kym-cdn.com/entries/icons/original/000/018/513/cups4.jpg'}),
        knex('lifestyles').insert({lifestyleId: 3, title: 'Longest balance on a yoga ball', description: 'Balancing is hard!', media: 'http://greatist.com/sites/default/files/StabilityBall_Feature.jpg'}),
        knex('lifestyles').insert({lifestyleId: 4, title: 'Perfect banana peel', description: 'Aim to peel a banana and have 0 strings left on it', media: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Banana_(partially_peeled).jpg/220px-Banana_(partially_peeled).jpg'})
      ])
    })
}
