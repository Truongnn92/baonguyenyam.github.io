'use strict';

import path from 'path';
import htmlToJs from 'gulp-html-to-js';

module.exports = function(gulp, setgulp, plugins, config, target, browserSync) {
    let url = config;
    let dest = path.join(target, 'temp');

    // Run task
    gulp.task('htmljs', () => {
        return gulp.src(path.join(target, '**/*.html'))
            .pipe(htmlToJs())
            .pipe(gulp.dest(dest));
    });
}