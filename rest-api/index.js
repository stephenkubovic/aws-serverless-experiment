const awsServerlessExpress = require('aws-serverless-express')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const createApp = require('./app')

const app = createApp(app => {
  app.use(awsServerlessExpressMiddleware.eventContext())
})

const server = awsServerlessExpress.createServer(app)

exports.handler = (event, context, callback) => {
  awsServerlessExpress.proxy(server, event, context)
}
