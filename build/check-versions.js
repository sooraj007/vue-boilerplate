var chalk = require('chalk')
var semver = require('semver')
var packageConfig = require('../package.json')
var shell = require('shelljs')
function exec (cmd) ***REMOVED***
  return require('child_process').execSync(cmd).toString().trim()
***REMOVED***

var versionRequirements = [
  ***REMOVED***
    name: 'node',
    currentVersion: semver.clean(process.version),
    versionRequirement: packageConfig.engines.node
***REMOVED***,
]

if (shell.which('npm')) ***REMOVED***
  versionRequirements.push(***REMOVED***
    name: 'npm',
    currentVersion: exec('npm --version'),
    versionRequirement: packageConfig.engines.npm
***REMOVED***)
***REMOVED***

module.exports = function () ***REMOVED***
  var warnings = []
  for (var i = 0; i < versionRequirements.length; i++) ***REMOVED***
    var mod = versionRequirements[i]
    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) ***REMOVED***
      warnings.push(mod.name + ': ' +
        chalk.red(mod.currentVersion) + ' should be ' +
        chalk.green(mod.versionRequirement)
      )
  ***REMOVED***
***REMOVED***

  if (warnings.length) ***REMOVED***
    console.log('')
    console.log(chalk.yellow('To use this template, you must update following to modules:'))
    console.log()
    for (var i = 0; i < warnings.length; i++) ***REMOVED***
      var warning = warnings[i]
      console.log('  ' + warning)
  ***REMOVED***
    console.log()
    process.exit(1)
***REMOVED***
***REMOVED***
