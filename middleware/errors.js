'use strict'

const errors = require('../utils/errors')
const logger = require('../utils/logger')

/**
 * Handle any error thrown in application
 * @param {*} ctx 
 * @param {*} next 
 */
const errorsMiddleware = async(ctx, next) => {
  try{
    return await next()
  } catch (err) {
    let currentError = err

    if(!(err instanceof errors.AppError)) {
      currentError = new errors.InternalError()
      currentError.stack = err.stack
    }
    
    ctx.status = parseInt(currentError.code)
    ctx.body = {
      type: currentError.type,
      message: currentError.message
    }

    logger.error({
      code: currentError.code,
      type: currentError.type,
      message: currentError.message,
      stack: currentError.stack
    })
  }
}

/**
 * Throw not found error (gets executed when no route match was found)
 */
const notFoundMiddleware = () => {
  throw new errors.NotFoundError()
}

module.exports = {
  errorsMiddleware,
  notFoundMiddleware
}