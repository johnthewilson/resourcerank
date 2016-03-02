/**
 * Created by johnwilson on 2/1/16.
 */


'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');


gulp.task('default', ['browser-sync'], function() {});

gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init(null, {
    proxy: "http://localhost:3000",
    files: ["public/**/*.*"],
    browser: "google chrome",
    port: 7000,
  });
});
gulp.task('nodemon', function(cb) {

  var started = false;

  return nodemon({
    script: 'server.js'
  }).on('start', function() {
    // to avoid nodemon being started multiple times
    // thanks @matthisk
    if (!started) {
      cb();
      started = true;
    }
  });
});



//var gulp        = require('gulp');
//var browserSync = require('browser-sync').create();
//
//
//
//gulp.task('bs', function() {
//    browserSync.init(["css/*.css","js/*.js"],{
//        server:{
//            baseDir: "./public"
//        }
//    });
//});
////
////gulp.task('bs', function () {
////    browserSync.init( {
////        proxy: 'resourcerank.dev' // 'dev.site.com' in your example
////
////    });
////});
//
//
///* Reload task */
////gulp.task('bs-reload', function () {
////    browserSync.reload();
////});
////gulp.task('watch', function () {
////    gulp.watch('public/css/**');
////    gulp.watch('public/js/controllers/**');
////    gulp.watch(['index.html', 'partials/*.html','views/*.html']);
////    //gulp.watch('_jadefiles/*.jade'),['jade'];
////});
//
///**
// * Default task, running just `gulp` will compile the sass,
// * compile the jekyll site, launch BrowserSync & watch files.
// */
//gulp.task('default', ['bs']);
