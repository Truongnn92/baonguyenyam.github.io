'use strict';

import path from 'path';
import packer from 'gulp-packer';
import streamify from 'gulp-streamify';

module.exports = function(gulp, setgulp, plugins, config, target, browserSync) {
    let url = config;
    let dest = path.join(target, 'lib');

    // Run task
    gulp.task('packer', () => {
        return gulp.src(path.join(target, '**/*.js'))
            .pipe(streamify(packer({
                base62: true,
                shrink: true
            })))
            .pipe(gulp.dest(dest));
    });
}