'use strict'

const crypto = require('crypto')
const bcrypt = require('bcrypt')
const config = require('../config')
const jwt = require('jsonwebtoken')
const util = require('util')
const errors = require('../utils/errors')

const jwtSign = util.promisify(jwt.sign)
const jwtVerify = util.promisify(jwt.verify)

/**
 * Creates a pepperified password
 * @param {string} password 
 */
const pepperify = (password) => {
  return crypto.createHmac('sha256', config.security.secretHash).update(password).digest('hex')
}

/**
 * Creates a new hash
 * @param {string} password 
 */
const hashPassword = (password) => {
  return bcrypt.hash(pepperify(password), config.security.saltRounds)
}

/**
 * Compares two passwords
 * @param {string} hashedPassword 
 * @param {string} password 
 */
const compare = (hashedPassword, password) => {
  return bcrypt.compare(pepperify(password), hashedPassword)
}

/**
 * Generates new user's JWT
 * @param {string} userEmail 
 */
const generateToken = (userEmail) => {
  return jwtSign({ userEmail }, config.security.secretHash, config.security.jwtInputSettings)
}

/**
 * Verify user's token
 * @param {JSON} token 
 */
const verifyToken = async(token) => {
  try{
    return await jwtVerify(token, config.security.secretHash, config.security.jwtOutputSettings)
  } catch(err){
    if (err instanceof jwt.JsonWebTokenError || err instanceof SyntaxError) throw new errors.UnauthorizedError()
		throw new errors.UnauthorizedError()
  }
}

module.exports = {
  pepperify,
  hashPassword,
  compare,
  generateToken,
  verifyToken
}