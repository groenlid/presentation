var gulp = require('gulp');

var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var paths = {
  scripts: ['src/**/*.js'],
  jshinted: ['src/**/*.js', 'test/*.js', 'gulpfile.js']
};

gulp.task("jshint", function(){
  var jshintOptions = {
    globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      };
  return  gulp.src(paths.jshinted)
              .pipe(jshint(jshintOptions))
              .pipe(jshint.reporter("default")); 
});

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['jshint', 'scripts']);