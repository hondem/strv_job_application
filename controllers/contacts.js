'use strict'

const { validate } = require('../validations')
const contactSchemas = require('../validations/schemas/contact')
const userSchemas = require('../validations/schemas/users')
const contactsRepository = require('../repositories/contacts')

const create = async(ctx) => {
  const userEmail = ctx.state.user.email
  validate(userSchemas.userEmail, userEmail)

  const newContact = {
    name: ctx.request.body.name,
    phone: ctx.request.body.phone,
    address: ctx.request.body.address
  }

  validate(contactSchemas.newContact, newContact)

  ctx.body = await contactsRepository.create(newContact, userEmail)
}

module.exports = {
  create
}