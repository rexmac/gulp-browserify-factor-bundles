
var gulp       = require('gulp'),
    browserify = require('browserify'),
    fs         = require('fs')


var pages   = fs.readdirSync('js').filter(function(f) { return /page\d+\.js/.test(f) }),
    inputs  = pages.map(function(page) { return './js/' + page }),
    outputs = pages.map(function(page) { return './bundles/' + page })


gulp.task('bundle', function() {
  var b = browserify(inputs)
  b.plugin('factor-bundle', { outputs: outputs })
  return b.bundle().pipe(fs.createWriteStream('bundles/common.js'))
})
