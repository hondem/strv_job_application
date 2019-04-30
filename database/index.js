'use strict'

const knex = require('knex')
const knexFile = require('../config/knexfile')
const { Model } = require('objection')

const knexInstance = knex(knexFile)

const start = async() => {
  try{
    await knexInstance.raw("SELECT 'users';")

    Model.knex(knexInstance)
  } catch(err){
    throw err
  }
}

module.exports = {
  start,
  knexInstance
}