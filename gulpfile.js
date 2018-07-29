/* Gulpfile.js */
let gulp = require('gulp')
let gutil =  require('gulp-util')
let sass = require('gulp-sass')
let webserver = require('gulp-webserver');
let gulpStylelint = require('gulp-stylelint');
let path = require('path')

/* Styles task */
gulp.task('styles',['lint-css','webfonts'], () => {
  return gulp.src('src/assets/sass/main.scss')
    .pipe(sass({
      includePaths: [
        path.join(__dirname, '/node_modules/bootstrap/scss'),
        path.join(__dirname, '/node_modules/font-awesome/scss')
      ],
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('build/assets/css/'));
})

gulp.task('webfonts', () => {
  return gulp.src('node_modules/font-awesome/fonts/**/*')
  .pipe(gulp.dest('build/assets/fonts'));
})

gulp.task('html', () => {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('build/'))
})

gulp.task('img', () => {
  return gulp.src('src/assets/img/**/*.{gif,jpg,png,svg}')
    .pipe(gulp.dest('build/assets/img/'))
})

gulp.task('js', () => {
  return gulp.src('src/assets/js/**/*.js')
    .pipe(gulp.dest('build/assets/js/'))
})

gulp.task('modal', () => {
  return gulp.src('/node_modules/bootstrap/js/src/modal.js')
    .pipe(gulp.dest('build/assets/js/'))
})

gulp.task('watch', () => {
    gulp.watch('src/sass/**/*.scss', ['styles'],cb => cb)
    gulp.watch('src/img/**/*.{gif,jpg,png,svg}', ['img'],cb => cb)
    gulp.watch('src/**/*.html', ['html'],cb => cb)
    gulp.watch('src/js/**/*.js', ['js'],cb => cb)
})

gulp.task('server', () => {
  gulp.src('build/')
    .pipe(webserver({
      livereload: true,
      open: true
    }))
})

gulp.task('lint-css', () => {

    gulp.src('src/assets/sass/main.scss')
    .pipe(gulpStylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }));
});

gulp.task('watch-server', ['server','watch'])

gulp.task('pack', [
  'html',
  'img',
  'styles',
  'js'
], cb => cb)