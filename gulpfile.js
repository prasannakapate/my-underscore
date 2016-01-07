var gulp 	= require('gulp'),
	uglify 	= require('gulp-uglify');

gulp.task('script', function(){
	gulp.src(['./src/my-underscore.js'])
		.pipe(uglify())
		.pipe(gulp.dest('./build/scripts/'));
});