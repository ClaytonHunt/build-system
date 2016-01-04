var del = require('del');
var gulp = require('gulp');
var connect = require('gulp-connect');

var config = require('../config');

var html = function() {
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.clientDist))
    .pipe(connect.reload());
};

gulp.task('clean:html', function() {
  del.sync(config.paths.clientDist + '*.html');
});

gulp.task('html', [], html);
gulp.task('html-clean', ['clean:html'], html);

gulp.task('watch:html', function() {
  gulp.watch(config.paths.html, ['html']);
});