var request = require('supertest')
var test = require('tape')

var app = require('../app')

test('can get the lifestyles from /api/v1/lifestyles', t => {
  request(app)
    .get('/api/v1/lifestyles')
    .end((err, res) => {
      t.false(err, 'The error from the /lifestyles is null (flasy)')
      t.true(res, 'The response from /lifestyles is truthy')
      t.true(res.body.hasOwnProperty('lifestyles'), 'There is a /lifestyles property returned from /lifestyles')
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
