'use strict'

const fakeUser = require('../fake/user')
const fakeContact = require('../fake/contact')

const request = require('supertest-koa-agent')
const app = require('../../app')
const { start } = require('../../database')

const _ = require('lodash')

describe('Users REST API', () => {
  describe('POST: /users/signup', () => {

    const newUser = fakeUser.generateUserData()

    it('Registered successfully', async() => {
      await request(app)
        .post('/users/signup')
        .send(newUser)
        .expect(200)
    })

    it('Wont create same user twice', async() => {
      await request(app)
        .post('/users/signup')
        .send(newUser)
        .expect(400)
    })

  })

  describe('POST: /users/login', () => {

    it('Logs in successfully', async() => {
      const newUser = await fakeUser.createUser()
      await request(app)
        .post('/users/login')
        .send({
          email: newUser.email,
          password: newUser.password
        })
        .expect(200)
    })

    it('Failes when bad credentials are given', async() => {
      const newUser = await fakeUser.createUser()
      await request(app)
        .post('/users/login')
        .send({
          email: newUser.email,
          password: newUser.password + 't'
        })
        .expect(401)
    })
  })

  describe('POST: /contacts', () => {

    it('Creates new contact successfully', async() => {
      const newUser = await fakeUser.createUserWithAccessToken()
      const newContact = await fakeContact.generateContactData()

      await request(app)
        .post('/contacts')
        .set('Authorization', newUser.accessToken)
        .send(newContact)
        .expect(204)
      
    })

  })
})