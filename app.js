'use strict'

const Koa = require('koa')
const koaBody = require('koa-bodyparser')
const koaCompress = require('koa-compress')
const koaCors = require('kcors')
const config = require('./config')
const logger = require('./utils/logger')
const database = require('./database')

/**
 * Requiring middlewares
 */
const routes = require('./routes')
const { logRequest } = require('./middleware/logger')
const errors = require('./middleware/errors')

const app = new Koa()

app.use(logRequest)

app.use(koaCompress())
app.use(koaCors())
app.use(koaBody())

app.use(errors.errorsMiddleware)
app.use(routes)
app.use(errors.notFoundMiddleware)

/**
 * Server start
 */
app.start = async() => {
  logger.info("Starting app...")
  // Start database connection
  await database.start()
}

app.stop = () => {
  logger.info("Stopping app...")
}

app.listen(config.server.port)

/**
 * If application is starting
 */
if (require.main === module){
  app.start()
}

/**
 * If application is closing
 */
process.once('SIGINT', () => { app.stop() })
process.once('SIGTERM', () => { app.stop() })

module.exports = app