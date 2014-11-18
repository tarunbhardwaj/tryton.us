var gulp = require('gulp'),
  csslint = require('gulp-csslint');

gulp.task('css-lint', function() {
  gulp.src('static/css/*.css')
    .pipe(csslint())
    .pipe(csslint.reporter());
});

gulp.task('default', ['css-lint']);
