'use strict';

var requireDir = require('require-dir');
requireDir('./gulp/tasks', { recurse: true });

var gulp = require('gulp');

gulp.task('build', ['client', 'backend']);
gulp.task('clean:build', ['client-clean', 'backend-clean']);

gulp.task('serve', ['serve:backend', 'serve:client']);
gulp.task('clean:serve', ['serve:backend-clean', 'serve:client-clean']);

gulp.task('default', ['serve']);