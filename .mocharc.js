'use strict'

module.exports = {
  recursive: true,
  slow: 1000,
  timeout: 2000,
  color: true,
  spec: [
    'tests', 
    'src/**/*.test.js'
  ],
  ui: 'bdd',
  exit: true,
  file: [
    './tests/bootstrap.test.js'
  ]
}