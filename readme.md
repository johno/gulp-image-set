# gulp-image-set [![Build Status](https://secure.travis-ci.org/johnotander/gulp-image-set.png?branch=master)](https://travis-ci.org/johnotander/gulp-image-set) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Gulp plugin to add future-proofed support for W3C-style image set notation. This provides a backround-image fallback for browsers
that don't support image-set.

## Installation

```bash
npm install --save gulp-image-set
```

## Usage

```bash
var gulp = require('gulp')
var imageSet = require('gulp-image-set')

gulp.task('image-set', function () {
  return gulp.src('my-file.css')
    .pipe(imageSet())
    .pipe(gulp.dest('dist'))
})

gulp.task('default', ['image-set'])
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
