/* eslint-disable no-process-env, import/first, global-require */

'use strict'

const env = process.env.NODE_ENV || 'local'

if (env === 'local') {
  require('dotenv').config({ silent: false })
}

const envConfPath = `./env/${env}`
const envConf = require(envConfPath)
const defaultConfig = require('./default')

const _ = require('lodash')

const resConf = _.merge(defaultConfig, envConf)

module.exports = resConf
