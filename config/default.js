'use strict'

/**
 * Basic config file for app
 */

module.exports = {
  server: {
    port: process.env.PORT || 5000,
  },
  logger: {
    prettyPrint: true,
  },
  db: {
    host : '127.0.0.1',
    user : 'postgres',
    database : 'strvjobapplication',
    password : ''
  },
  security: {
    saltRounds: 10,
    secretHash: process.env.SECURITY_SECRET_HASH || "w9z$C&E)H@McQfTjWnZr4u7x!A%D*G-J",
    jwtInputSettings: {
      algorithm: 'HS256',
      expiresIn: 60 * 60
    },
    jwtOutputSettings: {
      algorithm: 'HS256'
    }
  },
  firebase: {
    apiKey: process.env.FB_API_KEY || "AIzaSyCbVT_nEsWFgFEB6ciLd_oBb1vRu4UKRbs",
    authDomain: process.env.FB_AUTH_DOMAIN || "strv-job-application.firebaseapp.com",
    databaseURL: process.env.FB_DB_URL || "https://strv-job-application.firebaseio.com",
    projectId: process.env.FB_PROJECT_ID || "strv-job-application",
    storageBucket: process.env.FB_STORAGE_BUCKET || "strv-job-application.appspot.com",
    messagingSenderId: process.env.FB_MESSAGING_SENDER_ID || "627906288181"
  }
}
