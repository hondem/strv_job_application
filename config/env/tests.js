'use strict'

module.exports = {
  db: {
    uri: process.env.DB_URI || 'postgres://postgres:testpassword@localhost:5433/strv-job-test-db'
  },
  logger: {
    enabled: false
  }
}