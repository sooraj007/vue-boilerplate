var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

var env = config.build.env

var webpackConfig = merge(baseWebpackConfig, ***REMOVED***
  module: ***REMOVED***
    rules: utils.styleLoaders(***REMOVED***
      sourceMap: config.build.productionSourceMap,
      extract: true
  ***REMOVED***)
***REMOVED***,
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: ***REMOVED***
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
***REMOVED***,
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin(***REMOVED***
      'process.env': env
  ***REMOVED***),
    new webpack.optimize.UglifyJsPlugin(***REMOVED***
      compress: ***REMOVED***
        warnings: false
    ***REMOVED***,
      sourceMap: true
  ***REMOVED***),
    // extract css into its own file
    new ExtractTextPlugin(***REMOVED***
      filename: utils.assetsPath('css/[name].[contenthash].css')
  ***REMOVED***),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin(***REMOVED***
      cssProcessorOptions: ***REMOVED***
        safe: true
    ***REMOVED***
  ***REMOVED***),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin(***REMOVED***
      filename: config.build.index,
      template: 'index.html',
      inject: true,
      minify: ***REMOVED***
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
    ***REMOVED***,
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
  ***REMOVED***),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin(***REMOVED***
      name: 'vendor',
      minChunks: function (module, count) ***REMOVED***
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
    ***REMOVED***
  ***REMOVED***),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin(***REMOVED***
      name: 'manifest',
      chunks: ['vendor']
  ***REMOVED***),
    // copy custom static assets
    new CopyWebpackPlugin([
      ***REMOVED***
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
    ***REMOVED***
    ])
  ]
***REMOVED***)

if (config.build.productionGzip) ***REMOVED***
  var CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin(***REMOVED***
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
  ***REMOVED***)
  )
***REMOVED***

if (config.build.bundleAnalyzerReport) ***REMOVED***
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
***REMOVED***

module.exports = webpackConfig
