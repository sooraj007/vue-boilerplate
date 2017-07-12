var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = ***REMOVED***
  loaders: utils.cssLoaders(***REMOVED***
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
***REMOVED***)
***REMOVED***
