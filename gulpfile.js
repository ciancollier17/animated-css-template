const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-cli')
const cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => {
  return gulp.src('styles/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('build/styles'));
});

gulp.task("minify-html", () => {
  return gulp.src('*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'));
});

gulp.task("minify-js", () => {
  return gulp.src('scripts/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('build/scripts'));
});

gulp.task("copy-img", () => {
  return gulp.src('styles/images/*')
    .pipe(gulp.dest('build/styles/images'));
});

gulp.task("default", gulp.series('copy-img', 'minify-html', 'minify-css', 'minify-js'));
