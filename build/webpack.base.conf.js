var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var webpack = require('webpack')
function resolve (dir) ***REMOVED***
  return path.join(__dirname, '..', dir)
***REMOVED***

module.exports = ***REMOVED***
  entry: ***REMOVED***
    app: './src/main.js'
***REMOVED***,
  output: ***REMOVED***
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
***REMOVED***,
  resolve: ***REMOVED***
    extensions: ['.js', '.vue', '.json'],
    alias: ***REMOVED***
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
  ***REMOVED***
***REMOVED***,
  module: ***REMOVED***
    rules: [
     /* ***REMOVED***
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: ***REMOVED***
          formatter: require('eslint-friendly-formatter')
      ***REMOVED***
    ***REMOVED***,*/
      ***REMOVED***
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
    ***REMOVED***,
      ***REMOVED***
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
    ***REMOVED***,
      ***REMOVED***
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: ***REMOVED***
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
      ***REMOVED***
    ***REMOVED***,
      ***REMOVED***
        test: /\.css$/,
        include: [/node_modules/,/src/],
        use: ['style-loader', 'css-loader']
    ***REMOVED***,
      ***REMOVED***
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: ***REMOVED***
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
      ***REMOVED***
    ***REMOVED***
    ]
***REMOVED***,

  plugins: [
    new webpack.ProvidePlugin(***REMOVED***
      $: "jquery",
      jQuery: "jquery"
  ***REMOVED***)
  ]
***REMOVED***
