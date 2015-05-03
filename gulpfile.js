var gulp = require('gulp');
var htmlmini = require('gulp-html-minifier');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

var dev = './dev/';
var htdocs = './htdocs/';

var jsAssets = dev + 'js';
var jsPub = htdocs + 'js';
var cssAssets = dev + 'scss';


/* DEFAULT */

    gulp.task('default', ['minify','watch'], function() {
    });


/* MINIFY HTML & JS */

    gulp.task('minify', function() {
        gulp.src('dev/js/js.js') // JS sourcemap
            .pipe(sourcemaps.init())
            .pipe(uglify()) // minifier
            .pipe(rename('js.js'))
            .pipe(sourcemaps.write('./',
                {
                    includeContent: false,
                    sourceRoot: './dev/js/'
                }))
            .pipe(gulp.dest('./htdocs/js/'))
            .pipe(livereload())
        gulp.src('./dev/*.html')
            .pipe(htmlmini(
                {
                    collapseWhitespace: true
                }))
            .pipe(gulp.dest('./htdocs'))
    });


/* SASS */

    gulp.task('sass', function() {
        gulp.src('./dev/scss/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('./htdocs/css/'))
            .pipe(livereload())
    })


/* WATCH */

    gulp.task('watch', function() {
        livereload.listen()
        gulp.watch('dev/js/js.js',['minify'])
        gulp.watch('dev/scss/*',['sass'])
    });