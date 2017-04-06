/*global console, includePaths*/
/*jslint node: true*/

var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  cleanCSS = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  del = require('del'),
  imagemin = require('gulp-imagemin'),
  cache = require('gulp-cache'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('gulp-autoprefixer'),
  svgstore = require('gulp-svgstore'),
  svgmin = require('gulp-svgmin'),
  bourbon = require('node-bourbon'),
  ftp = require('vinyl-ftp'),
  notify = require('gulp-notify');

gulp.task('scripts', function () {
  'use strict';
  return gulp.src(
    'js/common.js'
  )
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function () {
  'use strict';
  browserSync({
    server: {
      baseDir: 'Pink-2'
    },
    notify: false
  });
});

gulp.task('clean', function () {
  'use strict';
  return del('build');
});

gulp.task('copy', function () {
  'use strict';
  return gulp.src([
    'fonts/**/*.{woff,woff2}',
    'img/**/*',
    'js/**',
    '*.html'
  ], {
    base: '.'
  })
    .pipe(gulp.dest('build'));
});


gulp.task('sass', function () {
  'use strict';
  return gulp.src('sass/style.scss')
    .pipe(sass({
      includePaths: bourbon.includePaths
    }).on('error', notify.onError()))
    .pipe(plumber())
    .pipe(sass().on('error', notify.onError()))
    .pipe(gulp.dest('build/css')) // тест
    .pipe(rename({suffix: '.min', prefix: ''}))
    .pipe(autoprefixer(['last 3 versions']))
    .pipe(cleanCSS())
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('imagemin', function () {
  'use strict';
  return gulp.src('img/**/*')
    .pipe(cache(imagemin()))
    .pipe(gulp.dest('build/img'));
});

gulp.task('symbols', function () {
  'use strict';
  return gulp.src('build/img/icons /*.svg')
    .pipe(svgmin())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('symbols.svg'))
    .pipe(gulp.dest('build/img'));
});

gulp.task('build', ['clean', 'copy', 'imagemin', 'sass', 'scripts'], function () {
  'use strict';
  var buildFiles = gulp.src([
      '*.html'
    ]).pipe(gulp.dest('build')),
    buildCss = gulp.src([
      'css/style.min.css',
      'css/style.css'
    ]).pipe(gulp.dest('build/css')),
    buildJs = gulp.src([
      'js/scripts.min.js',
      'js/common.js'
    ]).pipe(gulp.dest('build/js')),
    buildFonts = gulp.src([
      'fonts/**/*'
    ]).pipe(gulp.dest('build/fonts'));
  console.log(buildFiles, buildCss, buildJs, buildFonts);
});

gulp.task('watch', ['sass', 'scripts', 'browser-sync'], function () {
  'use strict';
  gulp.watch('sass/**/*.{sass,scss}', ['sass']);
  gulp.watch('js/common.js', ['scripts']);
  gulp.watch('*.html', browserSync.reload);
});

gulp.task('clearcache', function () {
  'use strict';
  return cache.clearAll();
});

gulp.task('default', ['watch']);
