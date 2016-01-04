var gulp = require('gulp');
var connect = require('gulp-connect');

var config = require('../config');

var serve = function() {
  connect.server({
    root: [config.paths.dist + '/client'],
    port: config.ports.client,
    base: config.devBaseUrl,
    livereload: true
  });  
};

gulp.task('client', ['html', 'css', 'js']);
gulp.task('client-clean', ['html-clean', 'css-clean', 'js-clean'])

gulp.task('serve:client', ['html', 'css', 'js', 'watch:html', 'watch:css', 'watch:js'], serve);
gulp.task('serve:client-clean', ['client-clean', 'watch:html', 'watch:css', 'watch:js'], serve);