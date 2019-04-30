'use strict'

module.exports = {
  db: {
    uri: process.env.DB_URI || 'postgresql://postgres@localhost:5433/strvjobapplication_test'
  },
  logger: {
    enabled: false
  }
}