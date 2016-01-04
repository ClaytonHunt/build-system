var del = require('del');
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var browserify = require('gulp-browserify');
var sourcemaps = require('gulp-sourcemaps');

var config = require('../config');

gulp.task('lint', function() {
  return gulp.src(config.paths.js)
          .pipe(eslint())
          .pipe(eslint.format());
});

var js = function() {
  gulp.src(config.paths.js)
    .pipe(sourcemaps.init())
    .pipe(browserify({
      transform: ['babelify']
    }))
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(config.paths.clientDist + '/scripts'))
    .pipe(connect.reload());  
};

gulp.task('clean:js', function() {
  del.sync(config.paths.clientDist + '/scripts/*.*');
});

gulp.task('js', ['lint'], js);
gulp.task('js-clean', ['lint', 'clean:js'], js);

gulp.task('watch:js', function() {
  gulp.watch(config.paths.jsWatch, ['js']);
});