
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({userId: 1, username: 'mikkeyfluttie', name: 'lordMaster', profilePic: 'https://placekitten.com/g/400/400', location: 'Wellington', bio: 'I am cool man', password: '$2a$10$xgKCJAf2UOZoGycgDXm3nOZwt42uvGv6.mzW1T7QRzwD/HzamQl2e'}),
        knex('users').insert({userId: 2, username: 'helloKitty', name: 'Kitten Person', profilePic: 'https://placekitten.com/g/400/400', location: 'Wellington', bio: 'I am cool man', password: '$2a$10$xgKCJAf2UOZoGycgDXm3nOZwt42uvGv6.mzW1T7QRzwD/HzamQl2e'}),
        knex('users').insert({userId: 3, username: 'George', name: 'Mr. George', profilePic: 'https://placekitten.com/g/400/400', location: 'Buenos Aires', bio: 'I am quite cool man', password: '$2a$10$xgKCJAf2UOZoGycgDXm3nOZwt42uvGv6.mzW1T7QRzwD/HzamQl2e'}),
        knex('users').insert({userId: 4, username: 'kate', name: 'Kate Bananas', profilePic: 'https://placekitten.com/g/400/400', location: 'Valparaiso', bio: 'I like universe and stuff', password: '$2a$10$xgKCJAf2UOZoGycgDXm3nOZwt42uvGv6.mzW1T7QRzwD/HzamQl2e'})
      ]);
    });
};
