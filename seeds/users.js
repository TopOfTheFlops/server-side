
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({userId: 1, username: 'mikkeyfluttie', name: 'lordMaster', profilePic: 'https://placekitten.com/g/400/400', bio: 'I am cool man', password: 'poodle123'}),
        knex('users').insert({userId: 2, username: 'mikkeyfluttie', name: 'lordMaster', profilePic: 'https://placekitten.com/g/400/400', bio: 'I am cool man', password: 'poodle123'}),
        knex('users').insert({userId: 3, username: 'mikkeyfluttie', name: 'lordMaster', profilePic: 'https://placekitten.com/g/400/400', bio: 'I am cool man', password: 'poodle123'})
      ]);
    });
};
