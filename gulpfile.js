var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');

gulp.task('es6', function() {
  return gulp.src('./scripts/*.js')
  .pipe(babel({
    "presets": ["es2015"]
  }))
  .pipe(concat('all.js'))
  .pipe(gulp.dest('gulp'))
})
