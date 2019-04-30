'use strict'

const operations = require('../operations/users')

const { validate } = require('../validations')
const schemas = require('../validations/schemas/users')

const signUp = async(ctx) => {
  const user = {
    email: ctx.request.body.email,
    password: ctx.request.body.password
  }

  validate(schemas.signUp, user)
  ctx.body = await operations.signUp(user)
}

const login = async(ctx) => {
  const user = {
    email: ctx.request.body.email,
    password: ctx.request.body.password
  }

  validate(schemas.login, user)
  ctx.body = await operations.login(user)
}

module.exports = {
  signUp,
  login
}