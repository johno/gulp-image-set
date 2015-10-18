import test from 'ava'
import gutil from 'gulp-util'
import gulpImageSet from '../'


test('provides the correct css', t => {
  var gulpImageSetStream = gulpImageSet()

  var actual = '.bg-img {background-image: image-set(\'my-img.png\' 1x,"my-img-2x.png" 2x,\'my-img-print.png\' 600dpi)}.some-other-class {color: #fafafa}'
  var expected = '.bg-img {\n  background-image: url(\'my-img.png\');\n  background-image: image-set(\'my-img.png\' 1x,\'my-img-2x.png\' 2x,\'my-img-print.png\' 600dpi);\n}\n\n.some-other-class {\n  color: #fafafa;\n}\n'

  gulpImageSetStream.once('data', file => {
    t.same(file.relative, 'default.css')
    t.same(withoutSourceMap(file.contents.toString()), expected)
  })

  gulpImageSetStream.on('end', () => { t.end() })

  gulpImageSetStream.write(new gutil.File({
    path: 'default.css',
    contents: new Buffer(actual)
  }))

  gulpImageSetStream.end()
})

function withoutSourceMap(str) {
  return (str || '').split('/*# sourceMappingURL')[0]
}
