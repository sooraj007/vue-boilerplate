// http://eslint.org/docs/user-guide/configuring

module.exports = ***REMOVED***
  root: true,
  parser: 'babel-eslint',
  parserOptions: ***REMOVED***
    sourceType: 'module'
***REMOVED***,
  env: ***REMOVED***
    browser: true,
***REMOVED***,
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': ***REMOVED***
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
***REMOVED***
***REMOVED***
