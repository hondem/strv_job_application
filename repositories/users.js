'use strict'

const User = require('../database/models/user')
const errors = require('../utils/errors')

const getAll = () => {
  return User.query()
}

const findById = (id) => {
  return User.query().where('id', id).first()
}

const findByEmail = (email) => {
  return User.query().where('email', email.toLowerCase()).first()
}

const create = (user) => {
  return User.query().insertAndFetch(user)
}

module.exports = {
  getAll,
  findByEmail,
  findById,
  create
}