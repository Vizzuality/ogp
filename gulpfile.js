const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const livereload = require('gulp-livereload');
const minify = require('gulp-minify');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');


gulp.task('imagemin', function () {
  return gulp.src('./sites/all/themes/custom/ogp_theme/images/*')
      .pipe(imagemin({
          progressive: true,
          svgoPlugins: [{removeViewBox: false}],
          use: [pngquant()]
      }))
      .pipe(gulp.dest('./sites/all/themes/custom/ogp_theme/images'));
});

gulp.task('sass', function () {
  gulp.src('./sites/all/themes/custom/ogp_theme/sass/*.scss')
    .pipe(sourcemaps.init())
        .pipe(sass(
          {
            outputStyle: 'compressed'
          }
        ).on('error', sass.logError))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./sites/all/themes/custom/ogp_theme/css'));
});


gulp.task('compress', () =>
    gulp.src(
      [
        './sites/all/themes/custom/ogp_theme/lib/**/*.js'
      ]
    )
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('bundle.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(minify())
        .pipe(gulp.dest('./sites/all/themes/custom/ogp_theme/scripts'))
);

gulp.task('watch', function(){
  livereload.listen();
  gulp.watch('./sites/all/themes/custom/ogp_theme/sass/**/*.scss', ['sass']);
  gulp.watch('./sites/all/themes/custom/ogp_theme/lib/**/*.js', ['compress']);
  gulp.watch('.env', ['dotenv']);
  gulp.watch(
    [
      './sites/all/themes/custom/ogp_theme/css/style.css',
      './sites/all/themes/custom/ogp_theme/**/*.php',
      './sites/all/themes/custom/ogp_theme/js/*.js'
    ], function (files) {
    livereload.changed(files);
  });
});

gulp.task('build', ['compress', 'sass', 'imagemin']);
