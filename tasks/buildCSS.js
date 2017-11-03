'use strict'

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

const config = {
    source: [
        'source/assets/style/style.scss'
    ],
    watch: [
        'source/assets/style/**/*.scss'
    ],
    dest: 'dist/assets/style'
};

class BuildCSS {
    compile () {
        return gulp.src(config.source)
                    .pipe(sourcemaps.init())
                    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
                    .pipe(sourcemaps.write('./maps'))
                    .pipe(rename({
                        suffix: ".min"
                    }))
                    .pipe(gulp.dest(config.dest));
    }

    watch () {
        return gulp.watch(config.watch, ['buildCSS']);
    }
};

module.exports = new BuildCSS();
