'use strict'

const firebaseApp = require('firebase/app')
require('firebase/firestore')

const config = require('../config')

const firebaseInstance = firebaseApp.initializeApp(config.firebase)
const db = firebaseInstance.firestore()

const create = async(contact, userEmail) => {
  await db.collection(userEmail).doc(contact.name).set(contact)
}

module.exports = {
  create
}