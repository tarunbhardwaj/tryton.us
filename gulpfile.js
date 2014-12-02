var gulp = require('gulp'),
  csslint = require('gulp-csslint');

gulp.task('css-lint', function() {
  gulp.src('theme/static/css/*.css')
    .pipe(csslint())
    .pipe(csslint.reporter());
});

gulp.task('default', ['css-lint']);
