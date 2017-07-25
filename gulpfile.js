'use strict';
var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var ejs = require('gulp-ejs');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');


gulp.task('css', function() {
return gulp.src('./src/views/css/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('./builds'));
});


gulp.task('ejs', function(){
  return gulp.src('src/views/**/*.ejs')
   .pipe(ejs({}, {ext:'.html'}))
   .pipe(gulp.dest('builds/'))
});


gulp.task('serve', function() {

});

gulp.task('jshint', function() {
  return gulp.src('./src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('scripts', function() {
  return gulp.src(['./src/js/*.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./builds'));
});


gulp.task('sass', function () {
  return gulp.src('./src/views/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/views/css'));
});


//watch

gulp.task('watch', function() {
  gulp.watch('src/js/*.js', ['jshint']);
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/views/**/*.ejs', ['ejs']);
  gulp.watch('./src/views/sass/*.scss', ['sass']);
  gulp.watch('./src/views/**/*.css', ['css']);
});

// The default task (called when we run `gulp` from cli)
gulp.task('default', ['watch',], function() {

});
