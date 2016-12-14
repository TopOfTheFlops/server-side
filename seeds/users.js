
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          userId: 1,
          username: 'mikkeyfluttie',
          name: 'lordMaster',
          profilePic: 'http://i.dailymail.co.uk/i/pix/2015/11/18/22/2E93CC5900000578-0-image-m-6_1447887305782.jpg',
          location: 'Wellington',
          bio: 'I am a master at many things',
          password: '$2a$10$xgKCJAf2UOZoGycgDXm3nOZwt42uvGv6.mzW1T7QRzwD/HzamQl2e'
        }),
        knex('users').insert({
          userId: 2,
          username: 'helloKitty',
          name: 'Kitten Person',
          profilePic: 'https://placekitten.com/g/400/400',
          location: 'Wellington',
          bio: 'I meow and also nap',
          password: '$2a$10$xgKCJAf2UOZoGycgDXm3nOZwt42uvGv6.mzW1T7QRzwD/HzamQl2e'
        }),
        knex('users').insert({
          userId: 3,
          username: 'George',
          name: 'Mr. George',
          profilePic: 'http://www.kkr.com/sites/default/files/George_R._Roberts_square.jpg',
          location: 'Buenos Aires',
          bio: 'I am quite cool man',
          password: '$2a$10$xgKCJAf2UOZoGycgDXm3nOZwt42uvGv6.mzW1T7QRzwD/HzamQl2e'
        }),
        knex('users').insert({
          userId: 4,
          username: 'kate',
          name: 'Kate Bananas',
          profilePic: 'http://i4.mirror.co.uk/incoming/article7764998.ece/ALTERNATES/s615b/kate-middleton-kiki-mcdonough-earrings.jpg',
          location: 'Valparaiso',
          bio: 'I like universe and stuff',
          password: '$2a$10$xgKCJAf2UOZoGycgDXm3nOZwt42uvGv6.mzW1T7QRzwD/HzamQl2e'
        })
      ]);
    });
};
