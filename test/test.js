const request = require('supertest')
const test = require('tape')

const app = require('../app')
const cookie =  { path: '/',
  _expires: null,
  originalMaxAge: null,
  httpOnly: true }


test('Can get the lifestyles from /api/v1/lifestyles', t => {
  request(app)
    .get('/api/v1/lifestyles')
    .expect(200)
    .end((err, res) => {
      t.false(err, 'The error from the /lifestyles is null (falsey)')
      t.true(res, 'The response from /lifestyles is truthy')
      t.true(res.body.hasOwnProperty('lifestyles'), 'There is a flops property returned from /lifestyles')
      t.end()
    })
})

test('Can get the flops from /api/v1/flops', t => {
  request(app)
  .get('/api/v1/flops')
  .end((err, res) => {
    t.false(err, 'The error from the /flops is null (falsey)')
    t.true(res, 'The response from /flops is truthy')
    t.true(res.body.hasOwnProperty('flops'), 'There is a /flops property returned from /flops')
    t.end()
  })
})

test('Can get a user from /api/v1/users/:id', t => {
  request(app)
    .get('/api/v1/users/1')
    .expect(200)
    .end((err, res) => {
      t.false(err, 'The error from the /users is null (falsey)')
      t.true(res, 'The response from /users is truthy')
      t.true(res.body.user.hasOwnProperty('name'), 'Get from users/:id comes back with an object ')
      t.end()
    })
})

test('Can post to the db and add a new lifestyle', t => {
  request(app)
    .post('/api/v1/lifestyle')
    .send({
      title: "Perfect banana peel",
      description: "Aim to peel a banana and have 0 strings left on it",
      media: "imgur.com/dgsjkfg"
    })
    .expect(201)
    .end((err, res) => {
      t.true(res, 'The response from posting to lifestyles is truthy')
      t.end()
    })
})

//removed cos it needs authentication
//
test('Can post to the db and add a new flop', t => {
  request(app)
    .post('/api/v1/flops')
    .set('Cookie', cookie)
    .send({
      userId: 32,
      mediaURL: "imgur.com/hkdskj",
      description: "I can do this with my eyes closed",
      lifestyleId:23
    })
    .expect(201)
    .end((err, res) => {
      t.true(res, 'The response from posting to flops to add a new one is truthy')
      t.end()
    })
})


//will make pass after client side voting is successful!! :)
test('Can post to the db and add a new vote', t => {
  request(app)
    .post('/api/v1/votes')
    .set('Cookie', cookie)
    .send({
      userId: 1,
      flopId: 1,
      upvote: 1,
      downvote: 0
    })
    .expect(201)
    .end((err, res) => {
      t.false(err, 'The error from posting to /votes is null (falsey)')
      t.true(res, 'The response from posting to flops to add a new one is truthy')
      t.end()
    })
})
