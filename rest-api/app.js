const express = require('express')
const get = require('lodash.get')

module.exports = (configure = () => {}) => {
  const app = express()

  configure(app)

  app.get('/', (req, res, next) => {
    res.json({
      nodeEnv: process.env.NODE_ENV,
      event: get(req, 'apiGateway.event', null)
    })
  })

  return app
}
