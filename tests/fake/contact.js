'use strict'

const Chance = require('chance').Chance
const chanceInstance = new Chance()

const generateContactData = () => {
  return {
    name: chanceInstance.string(),
    phone: chanceInstance.string(),
    address: chanceInstance.string()
  }
}

module.exports = {
  generateContactData
}