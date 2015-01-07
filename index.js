'use strict';

var gutil = require('gulp-util');
var through = require('through2');
var rework = require('rework');
var imageSet = require('rework-image-set');

module.exports = function gulpImageSet() {
  return through.obj(function(file, encoding, callback) {
    if (file.isNull()) {
      callback(null, file);
    }

    if (file.isStream()) {
      callback(new gutil.PluginError('gulp-image-set', 'Streaming not supported'));
      return;
    }

    try {
      var inputCss = file.contents.toString();
      var outputCss = rework(inputCss, { source: file.path }).use(imageSet()).toString({ sourcemap: true });

      file.contents = new Buffer(outputCss);
      this.push(file);
    } catch (err) {
      this.emit('error', new gutil.PluginError('gulp-image-set', err, { fileName: file.path }));
    }

    callback();
  });
}
