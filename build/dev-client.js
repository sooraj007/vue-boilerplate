/* eslint-disable */
require('eventsource-polyfill')
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

hotClient.subscribe(function (event) ***REMOVED***
  if (event.action === 'reload') ***REMOVED***
    window.location.reload()
***REMOVED***
***REMOVED***)
