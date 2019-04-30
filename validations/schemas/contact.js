'use strict'

const newContact = {
  type: 'Object',
  required: true,
  properties: {
    name: {
      type: 'string',
      required: true
    },
    phone: {
      type: 'string',
      required: true,
    },
    address: {
      type: 'string',
      required: true
    }
  }
}

module.exports = {
  newContact
}