/**
 * Created with JetBrains PhpStorm.
 * User: Chen Chao
 * Date: 2015/7/6
 * Time: 14:46
 */

var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var header = require('gulp-header');
var sh = require('shelljs');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var pkg = require('./package.json');
var argv = process.argv;

var banner = [
  '/**',
  ' ** shaman blog',
  ' **/',
  ''
].join('\n');

var paths = {
  css: ['./static/css/*.css'],
  color: ['./static/css/colors/*.css'],
  js: ['./static/js/*.js']
};

gulp.task('default', function(){
  sh.exec('gulp cssmin');
  sh.exec('gulp uglify');
  sh.exec('gulp copy');
  //sh.exec('gulp clean');
});

// 压缩css
gulp.task('cssmin', function() {
  gulp.src(paths['css'])
    .pipe(minifyCss())
    .pipe(header(banner, {pkg: pkg}))
    .pipe(concat('shaman05.min.css'))
    .pipe(gulp.dest('./dist/css/'));
  // 主题css
  gulp.src(paths['color'])
    .pipe(minifyCss())
    .pipe(header(banner, {pkg: pkg}))
    .pipe(gulp.dest('./dist/css/'));
});

// 压缩普通js代码
gulp.task('uglify', function(){
  return gulp.src(paths['js'])
    .pipe(uglify({ outSourceMap: false}))
    .pipe(header(banner, {pkg: pkg}))
    .pipe(concat('shaman05.min.js'))
    .pipe(gulp.dest('./dist/js/'))
});

// 拷贝字体
gulp.task('copy', function(){
  gulp.src('./static/fonts/*')
    .pipe(gulp.dest('./dist/fonts/'));
});


// 清理构建过程中生成的临时文件
/*gulp.task('clean', function(){
 return gulp.src('./.build/', {read: false})
 .pipe(clean())
 });*/