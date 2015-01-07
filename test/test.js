var assert = require('assert');
var gutil = require('gulp-util');
var gulpImageSet = require('..');

describe('gulp-image-set', function() {

  it('should provide the correct css', function(done) {
    var gulpImageSetStream = gulpImageSet();

    var actual = '.bg-img {background-image: image-set(\'my-img.png\' 1x,"my-img-2x.png" 2x,\'my-img-print.png\' 600dpi);}.some-other-class {color: #fafafa;}';
    var expected = '.bg-img {\n  background-image: url(\'my-img.png\');\n  background-image: image-set(\'my-img.png\' 1x,\'my-img-2x.png\' 2x,\'my-img-print.png\' 600dpi);\n}\n\n.some-other-class {\n  color: #fafafa;\n}\n';

    gulpImageSetStream.once('data', function(file) {
      assert.equal(file.relative, 'default.css');
      assert.equal(withoutSourceMap(file.contents.toString()), expected);
    });

    gulpImageSetStream.on('end', done);

    gulpImageSetStream.write(new gutil.File({
      path: 'default.css',
      contents: new Buffer(actual)
    }));

    gulpImageSetStream.end();
  });
});

function withoutSourceMap(str) {
  return (str || '').split('/*# sourceMappingURL')[0];
}
