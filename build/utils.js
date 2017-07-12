var path = require('path')
var config = require('../config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.assetsPath = function (_path) ***REMOVED***
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
***REMOVED***

exports.cssLoaders = function (options) ***REMOVED***
  options = options || ***REMOVED******REMOVED***

  var cssLoader = ***REMOVED***
    loader: 'css-loader',
    options: ***REMOVED***
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap
  ***REMOVED***
***REMOVED***

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) ***REMOVED***
    var loaders = [cssLoader]
    if (loader) ***REMOVED***
      loaders.push(***REMOVED***
        loader: loader + '-loader',
        options: Object.assign(***REMOVED******REMOVED***, loaderOptions, ***REMOVED***
          sourceMap: options.sourceMap
      ***REMOVED***)
    ***REMOVED***)
  ***REMOVED***

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) ***REMOVED***
      return ExtractTextPlugin.extract(***REMOVED***
        use: loaders,
        fallback: 'vue-style-loader'
    ***REMOVED***)
  ***REMOVED*** else ***REMOVED***
      return ['vue-style-loader'].concat(loaders)
  ***REMOVED***
***REMOVED***

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return ***REMOVED***
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', ***REMOVED*** indentedSyntax: true ***REMOVED***),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
***REMOVED***
***REMOVED***

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) ***REMOVED***
  var output = []
  var loaders = exports.cssLoaders(options)
  for (var extension in loaders) ***REMOVED***
    var loader = loaders[extension]
    output.push(***REMOVED***
      test: new RegExp('\\.' + extension + '$'),
      use: loader
  ***REMOVED***)
***REMOVED***
  return output
***REMOVED***
