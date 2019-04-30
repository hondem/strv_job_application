/* eslint-disable no-process-env, import/first, global-require */

'use strict'

const env = process.env.NODE_ENV || 'local'
const _ = require('lodash')

if (env === 'local') {
  require('dotenv').config({ silent: false })
}

const envConfPath = `./env/${env}`
const envConf = require(envConfPath)
const defaultConfig = require('./default')(env)


const resConf = _.merge(defaultConfig, envConf)

module.exports = resConf
