var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, ***REMOVED***
  NODE_ENV: '"development"'
***REMOVED***)
