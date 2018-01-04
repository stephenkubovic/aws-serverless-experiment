const knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URI
})

exports.handler = (event, context, callback) => {
  console.log('DATABASE_URI', process.env.DATABASE_URI)

  knex
    .select('*')
    .from('pg_catalog.pg_tables')
    .whereNotIn('schemaname', ['pg_catalog', 'information_schema'])
    .then(rows => {
      callback(null, {
        statusCode: '200',
        body: JSON.stringify(rows)
      })
    })
    .catch(err => {
      callback(null, {
        statusCode: '500',
        body: err.toString()
      })
    })
}
