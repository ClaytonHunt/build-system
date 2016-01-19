var del = require('del');
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var browserify = require('browserify');
var babelify = require('babelify');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');

var config = require('../config');

gulp.task('lint', function () {
    return gulp.src(config.paths.js)
        .pipe(eslint())
        .pipe(eslint.format());
});

var js = function () {
    return browserify(config.paths.js, {debug: true})
        .transform(babelify)
        .bundle()
        .on('error', gutil.log.bind(gutil, "Browserify Error"))
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
        .pipe(uglify({mangle: config.isProduction}))
        .pipe(sourcemaps.write('./')) // writes .map file
        .pipe(gulp.dest(config.paths.clientDist + '/scripts'))
        .pipe(connect.reload());
};

gulp.task('clean:js', function () {
    del.sync(config.paths.clientDist + '/scripts/*.*');
});

gulp.task('js', ['lint'], js);
gulp.task('js-clean', ['lint', 'clean:js'], js);

gulp.task('watch:js', function () {
    gulp.watch(config.paths.jsWatch, ['js']);
});

var thirdParty = function () {
    return gulp.src(config.paths.jsThirdParty)
        .pipe(gulp.dest(config.paths.clientDist + '/scripts'))
        .pipe(connect.reload());
};

gulp.task('thirdParty', [], thirdParty);