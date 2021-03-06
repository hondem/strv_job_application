module.exports = {
  recursive: true,
  slow: 1000,
  timeout: 2000,
  color: true,
  reporter: 'spec',
  spec: ['tests', 'tests/**/*.test.js'],
  ui: 'bdd',
  file: ['tests/bootstrap.test.js'],
  exit: true
}
