'use strict';

import path from 'path';
import del from 'del';
import babel from 'gulp-babel';
import through from 'through2';
import sourcemaps from 'gulp-sourcemaps';
import concat from 'gulp-concat';
import rev from 'gulp-rev';
import revReplace from 'gulp-rev-replace';
import useref from 'gulp-useref';
import filter from 'gulp-filter';

// function logFileHelpers() {
// 	return through.obj((file, enc, cb) => {
// 		console.log(file.babel.usedHelpers);
// 		cb(null, file);
// 	});
// }

module.exports = function(gulp, setgulp, plugins, config, target, browserSync) {
    let url = config;
    let dest = path.join(target);
    let destconfig = path.join(target, url.config);
    let destjs = path.join(target, url.scripts.assets);
    let destcss = path.join(target, url.styles.assets);

    let jsFilter = filter("**/*.js", {
        restore: true
    });
    let cssFilter = filter("**/*.css", {
        restore: true
    });
    let indexHtmlFilter = filter(['**/*', '!**/index.html'], {
        restore: true
    });

    // Run task
    gulp.task('rev', () => {
        return gulp.src([
                path.join(dest, '**/*.html')
            ])
            .pipe(useref()) // Concatenate with gulp-useref
            .pipe(jsFilter)
            .pipe(jsFilter.restore)
            .pipe(cssFilter)
            .pipe(cssFilter.restore)
            .pipe(indexHtmlFilter)
            .pipe(rev()) // Rename the concatenated files (but not index.html)
            .pipe(indexHtmlFilter.restore)
            .pipe(revReplace())
            // .pipe(plugins.changed(dest))
            // .pipe(gulp.dest(destjs))
            // .pipe(rev())
            // .pipe(plugins.changed(dest))
            // .pipe(gulp.dest(destjs))
            // .pipe(rev.manifest())
            // .pipe(plugins.changed(dest))
            // .pipe(gulp.dest(destjs)),
            // gulp.src([
            //     path.join(destcss, '**/*.css')
            // ])
            // .pipe(plugins.changed(dest))
            // .pipe(gulp.dest(destcss))
            // .pipe(rev())
            // .pipe(plugins.changed(dest))
            // .pipe(gulp.dest(destcss))
            // .pipe(rev.manifest())
            .pipe(plugins.changed(dest))
            .pipe(gulp.dest(destcss));
    });

};