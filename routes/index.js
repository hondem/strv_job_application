'use strict'

const KoaRouter = require('koa-router')
const router = new KoaRouter()

/**
 * Controllers
 */
const usersController = require('../controllers/users')
const contactsController = require('../controllers/contacts')

/**
 * Middlewares
 */
const authorizationMiddleware = require('../middleware/auth')

/**
 * Defining routes
 */
router.get('/', (ctx) => {
  ctx.body = {
    "My API of version: ": "1.0.0"
  }
})

router.post('/users/signup', usersController.signUp)
router.post('/users/login', usersController.login)

router.post('/contacts', authorizationMiddleware, contactsController.create)

module.exports = router.routes()
