var gulp = require('gulp');
var cssmin = require('gulp-minify-css');//
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');//
var revCollector = require('gulp-rev-collector');
var concat = require('gulp-concat');
var rev = require('gulp-rev');
var clean = require('gulp-clean');
var del =require('del')
var paths = {
    scss: ['scss/*.scss'],
    css: ['css/*.css'],
    scripts:['js/*.js'],
    images:['images/*'],
    fonts:['fonts/*']
};
gulp.task('clean', function() {
    // You can use multiple globbing patterns as you would with `gulp.src`
    return del(['build']);
});

gulp.task('compile-sass', function () {
    gulp.src(paths.scss)
        .pipe(sass())
        .pipe(gulp.dest('css/'));
});
gulp.task('cssmin', function () {
    gulp.src(paths.css)
        .pipe(cssmin())
        .pipe(concat('all.min.css'))
        .pipe(rev())
        .pipe(gulp.dest('build/css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('build/rev/css'));
});
gulp.task('scripts', function () {
    // Minify and copy all JavaScript (except vendor scripts)
    // with sourcemaps all the way down
    return gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(sourcemaps.write())
        .pipe(rev())
        .pipe(gulp.dest('build/js'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('build/rev/js'));
});
gulp.task('images', function() {
    return gulp.src(paths.images)
        // Pass in options to the task
        .pipe(rev())
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest('build/images'));
});
gulp.task('fonts',function () {
    return gulp.src(paths.fonts)
        .pipe(gulp.dest('build/fonts/'));
});

gulp.task('rev', function () {
    return  gulp.src(['build/rev/**/*.json','baidu_gulp/*.html'])
        .pipe( revCollector({
            replaceReved: true,
            dirReplacements: {
                'css': 'build/css',
            }
        }) )
        .pipe( gulp.dest('build/html') );
});
// Rerun the task when a file changes
gulp.task('watch', function () {
    gulp.watch(paths.scss, ['compile-sass']);
    gulp.watch(paths.css, ['cssmin']);
});
gulp.task('default', ['clean'], function() {
    gulp.start('watch', 'compile-sass', 'cssmin','scripts','images','fonts','rev');
});



