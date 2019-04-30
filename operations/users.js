'use strict'

const usersRepository = require('../repositories/users')
const errors = require('../utils/errors')
const crypto = require('../utils/crypto')


const verifyTokenPayload = async(token) => {
  const payload = await crypto.verifyToken(token)
  const now = Date.now()

  if(!payload || !payload.exp || now > payload.exp * 1000){
    throw new errors.UnauthorizedError()
  }

  const user = await usersRepository.findByEmail(payload.userEmail)

  if(!user){
    throw new errors.UnauthorizedError()
  }

  return {
    user,
    loginTimeout: payload.exp * 1000
  }

}

const signUp = async(user) => {
  const userExists = await usersRepository.findByEmail(user.email.toLowerCase())

  if(userExists){
    throw new errors.UserExistError()
  }

  const newUser = {
    email: user.email.toLowerCase(),
    password: await crypto.hashPassword(user.password)
  }

  const createdUser = await usersRepository.create(newUser)
  createdUser.accessToken = await crypto.generateToken(createdUser.email)

  return createdUser
}

const login = async(user) => {
  const foundUser = await usersRepository.findByEmail(user.email.toLowerCase())

  if(!foundUser){
    throw new errors.NotFoundError()
  }

  if(!await crypto.compare(foundUser.password, user.password)){
    throw new errors.UnauthorizedError()
  }

  const accessToken = await crypto.generateToken(foundUser.email)

  return {
    id: foundUser.id,
    email: foundUser.email,
    accessToken
  }
}


module.exports = {
  signUp,
  login,
  verifyTokenPayload
}
