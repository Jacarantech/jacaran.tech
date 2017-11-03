'use strict'

const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');

const htmlminConfigs = {collapseWhitespace: true, removeComments: true};

const config = {
    source: [
        'source/*.html'
    ],
    watch: [
        'source/*.html'
    ],
    dest: 'dist'
};

class BuildHTML {
    compile () {
        return gulp.src(config.source)
                    .pipe(htmlmin({
                        collapseWhitespace: true,
                        removeComments: true
                    }))
                    .pipe(gulp.dest(config.dest));
    }

    watch () {
        return gulp.watch(config.watch, ['buildHTML']);
    }
};

module.exports = new BuildHTML();
