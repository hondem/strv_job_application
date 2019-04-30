'use strict'

const signUp = {
  type: 'Object',
  required: true,
  properties: {
    email: {
      type: 'string',
      required: true,
      format: 'email'
    },
    password: {
      type: 'string',
      required: true
    }
  }
}

const login = {
  type: 'Object',
  required: true,
  properties: {
    email: {
      type: 'string',
      required: true,
      format: 'email'
    },
    password: {
      type: 'string',
      required: true
    }
  }
}

const jwtToken = {
  type: 'Object',
  required: true,
  properties: {
    jwtToken: {
      type: 'string',
      required: true
    }
  }
}

const userEmail = {
  type: 'string',
  required: true
}
const userId = {
  type: 'integer',
  required: true
}

module.exports = {
  signUp,
  login,
  jwtToken,
  userEmail,
  userId
}
