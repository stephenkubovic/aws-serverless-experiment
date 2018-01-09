const test = require('ava')
const supertest = require('supertest')
const createApp = require('./app')

test.cb('GET /', t => {
  const app = createApp()

  supertest(app)
    .get('/')
    .expect(200)
    .end(t.end)
})
