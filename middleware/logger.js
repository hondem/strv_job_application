'use strict'

const logger = require('../utils/logger')

const logRequest = (ctx, next) => {
  logger.info('Incomming request: ', ctx.request)
  return next()
}

module.exports = {
  logRequest,
}
