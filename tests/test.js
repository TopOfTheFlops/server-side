var request = require('supertest')
var test = require('tape')

var app = require('../app')

test('can get the lifestyles from /api/v1/lifestyles', t => {
  request(app)
    .get('/api/v1/lifestyles')
    .expect(200)
    .end((err, res) => {
      t.false(err, 'The error from the /lifestyles is null (flasy)')
      t.true(res, 'The response from /lifestyles is truthy')
      t.true(res.body.hasOwnProperty('lifestyles'), 'There is a flops property returned from /lifestyles')
      t.end()
    })
})

test('can get the flops from /api/v1/flops', t => {
  request(app)
  .get('/api/v1/flops')
  .end((err, res) => {
    t.false(err, 'The error from the /flops is null (flasy)')
    t.true(res, 'The response from /flops is truthy')
    t.true(res.body.hasOwnProperty('flops'), 'There is a /flops property returned from /flops')
    t.end()
  })
})

test('can get a user from /api/v1/users/:id', t => {
  request(app)
    .get('/api/v1/users/1')
    .expect(200)
    .end((err, res) => {
      t.false(err, 'The error from the /users is null (flasy)')
      t.true(res, 'The response from /users is truthy')
      t.true(res.body.hasOwnProperty('name'), 'Get from users/:id comes back with an object ')
      t.end()
    })
})

test('can post to the db and upvote on flop', t => {
  request(app)
    .post('/api/v1/flops/vote')
    .send({action: 'upVotes', flopId: 1, lifestyleId: 1})
    .expect(201)
    .end((err, res) => {
      t.false(err, 'The error from posting to /flops/:id is null (falsy)')
      t.end()
    })
})

test('can post to the db and add a new lifestyle', t => {
  request(app)
    .post('/api/v1/lifestyle')
    .expected(201)
    .end((err, res) => {
      t.false(err, 'The error from posting to /lifestyle is null (falsy)')
      t.end()
    })
})

test('can post to the db and add a new flop', t => {
  request(app)
    .post('/api/v1/flops')
    .expected(201)
    .end((err, res) => {
      t.false(err, 'The error from posting to /flops is null (falsy)')
      t.end()
    })
})
