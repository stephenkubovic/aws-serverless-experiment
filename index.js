exports.handler = (event, context, callback) => {
  const currentTime = new Date().toTimeString()
  callback(null, {
    statusCode: '200',
    body: `The current time is ${currentTime}`
  })
}
