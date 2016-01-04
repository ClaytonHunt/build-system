var del = require('del');
var gulp = require('gulp');
var nodemon = require('nodemon');
var install = require('gulp-install');
var connect = require('gulp-connect');

var config = require('../config');

var server = function(cb) {
  console.log(config.paths.server);
  return gulp.src(config.paths.server)
    .pipe(gulp.dest(config.paths.backendDist))
    .pipe(install());    
};

var serve = function (cb) {	
	var started = false;
	
	return nodemon({
		script: config.paths.backendDist + '/bin/www',
    env: {
      PORT: config.ports.backend
    }
	}).on('start', function () {
		if (!started) {
      cb();
			started = true; 
		} 
	});
};

gulp.task('clean:backend', function() {
  del.sync(config.paths.backendDist);
});

gulp.task('backend', [], server);
gulp.task('backend-clean', ['clean:backend'], server);

gulp.task('watch:backend', function() {
  gulp.watch(config.paths.server, ['backend']);
});

gulp.task('serve:backend', ['backend', 'watch:backend'], serve);
gulp.task('serve:backend-clean', ['backend-clean', 'watch:backend'], serve);