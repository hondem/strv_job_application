'use strict'

const { start, knexInstance } = require('../database')

describe('Test project setup', () => {
  describe('Database', () => {

    it('Migrates', async() => {
      await knexInstance.migrate.latest()
    })

    it('Connects', async() => {
      await start()
    })
    
  })
})

// describe('My successfull test', () => {
//   it('Works', () => {

//   })
// })
