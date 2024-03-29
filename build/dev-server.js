require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) ***REMOVED***
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
***REMOVED***

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, ***REMOVED***
  publicPath: webpackConfig.output.publicPath,
  quiet: true
***REMOVED***)

var hotMiddleware = require('webpack-hot-middleware')(compiler, ***REMOVED***
  log: () => ***REMOVED******REMOVED***
***REMOVED***)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) ***REMOVED***
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) ***REMOVED***
    hotMiddleware.publish(***REMOVED*** action: 'reload' ***REMOVED***)
    cb()
***REMOVED***)
***REMOVED***)

// proxy api requests
Object.keys(proxyTable).forEach(function (context) ***REMOVED***
  var options = proxyTable[context]
  if (typeof options === 'string') ***REMOVED***
    options = ***REMOVED*** target: options ***REMOVED***
***REMOVED***
  app.use(proxyMiddleware(options.filter || context, options))
***REMOVED***)

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => ***REMOVED***
  _resolve = resolve
***REMOVED***)

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => ***REMOVED***
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') ***REMOVED***
    opn(uri)
***REMOVED***
  _resolve()
***REMOVED***)

var server = app.listen(port)

module.exports = ***REMOVED***
  ready: readyPromise,
  close: () => ***REMOVED***
    server.close()
***REMOVED***
***REMOVED***
