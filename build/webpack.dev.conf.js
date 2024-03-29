var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) ***REMOVED***
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
***REMOVED***)

module.exports = merge(baseWebpackConfig, ***REMOVED***
  module: ***REMOVED***
    rules: utils.styleLoaders(***REMOVED*** sourceMap: config.dev.cssSourceMap ***REMOVED***)
***REMOVED***,
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin(***REMOVED***
      'process.env': config.dev.env
  ***REMOVED***),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin(***REMOVED***
      filename: 'index.html',
      template: 'index.html',
      inject: true
  ***REMOVED***),
    new FriendlyErrorsPlugin()
  ]
***REMOVED***)
