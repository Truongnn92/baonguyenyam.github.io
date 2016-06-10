'use strict';

import path from 'path';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSyncLib from 'browser-sync';
// import minimist from 'minimist';
import wrench from 'wrench';
// import wiredep from 'wiredep';
import yargs from 'yargs';
// import gulpif from 'gulp-if';
import runSequence from 'run-sequence';

const fs = require('fs');
const yaml = require("js-yaml");
const load = yaml.load(fs.readFileSync("./config.yml"));
// import load from './get4x.yaml';

// Global 
const plugins = gulpLoadPlugins();
// Create a new browserSync
let browserSync = browserSyncLib.create();
// let browserSync = '';
// Call Config 
let config = load.config;
// let setgulp = minimist(process.argv.slice(2));
let setgulp = yargs.argv;
// console.log(setgulp.production);
let target = setgulp.production ? config.dest : config.tmp;

// Load Gulp tasks folder
wrench.readdirSyncRecursive('./resources/assets/task/gulp').filter((file) => {
    return (/\.(js)$/i).test(file);
}).map(function(file) {
    require('./resources/assets/task/gulp/' + file)(gulp, setgulp, plugins, config, target, browserSync);
});

// Default task
gulp.task('default', ['clean'], () => {
    gulp.start('test');
});


gulp.task('build', ['clean'], () => {
    gulp.start('product');
});


// Build production-ready code
gulp.task('product', function(cb) {
    runSequence(
        'babel',
        'compass',
        'concat',
        'copy',
        'fonts',
        'jade',
        // 'jadeindex',
        'uglify',
        'cssmin',
        'header',
        // 'bundler',
        // 'htmlmin',
        // 'imagemin',
        // 'replace',
        // 'delmin',
        'rev',
        'browserSync',
        cb
    );
});

// Server tasks with watch
gulp.task('test', function(cb) {
    runSequence(
        'copy',
        'babel',
        'concat',
        'compass',
        'fonts',
        'jade',
        // 'jadeindex',
        // 'jshint',
        // 'eslint',
        'uglify',
        'cssmin',
        // 'header',
        // 'htmlmin',
        // 'csscomb',
        // 'bundler',
        'browserSync',
        'watch',
        cb
    );
});