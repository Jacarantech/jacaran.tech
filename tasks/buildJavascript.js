'use strict'

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

let config = {
    source: [
        'source/assets/scripts/libs/*.js',
        'source/assets/scripts/**/*.js'
    ],
    watch: [
        'source/assets/scripts/**/*.js'
    ],
    dest: 'dist/assets/scripts'
};

class BuildJavascript {
    compile () {
        return gulp.src(config.source)
                    .pipe(sourcemaps.init())
                    .pipe(uglify())
                    .pipe(concat('scripts.min.js'))
                    .pipe(sourcemaps.write('./maps'))
                    .pipe(gulp.dest(config.dest));
    }

    watch () {
        return gulp.watch(config.watch, ['buildJavascript']);
    }
};

module.exports = new BuildJavascript();
