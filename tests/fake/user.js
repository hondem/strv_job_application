'use strict'

const Chance = require('chance').Chance
const chanceInstance = new Chance()

const User = require('../../database/models/user')
const crypto = require('../../utils/crypto')

const generateUserData = () => {
  return {
    email: chanceInstance.email(),
    password: chanceInstance.string({ length: 12 }),
  }
}

const createUser = async() => {
  const newUser = generateUserData()
  await User.query().insert({
    email: newUser.email,
    password: await crypto.hashPassword(newUser.password)
  })
  return newUser
}

const createUserWithAccessToken = async () => {
  const user = await createUser()
  const accessToken = await crypto.generateToken(user.email)

  return {
    user,
    accessToken
  }
}

module.exports = {
  generateUserData,
  createUser,
  createUserWithAccessToken
}