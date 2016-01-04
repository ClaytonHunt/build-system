var del = require('del');
var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var connect = require('gulp-connect');

var config = require('../config');

var css = function() {
  gulp.src(config.paths.css)
    .pipe(less())
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.clientDist + '/styles'))
    .pipe(connect.reload());
};

gulp.task('clean:css', function() {
  del.sync(config.paths.clientDist + '/styles/*.*');
});

gulp.task('css', [], css);
gulp.task('css-clean', ['clean:css'], css);

gulp.task('watch:css', function() {
  gulp.watch(config.paths.css, ['css']);
});