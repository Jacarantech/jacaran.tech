'use strict';

const gulp = require('gulp');
const buildHTML = require('./tasks/buildHTML');
const buildCSS = require('./tasks/buildCSS');
const buildJavascript = require('./tasks/buildJavascript');
const browserSync = require('browser-sync').create();

gulp.task('buildCSS', buildCSS.compile);
gulp.task('buildCSS:watch', buildCSS.watch);

gulp.task('buildHTML', buildHTML.compile);
gulp.task('buildHTML:watch', buildHTML.watch);

gulp.task('buildJavascript', buildJavascript.compile);
gulp.task('buildJavascript:watch', buildJavascript.watch);


gulp.task('default', [
	'buildHTML',
	'buildCSS',
	'buildJavascript'
]);

gulp.task('watch', [
	'buildHTML:watch',
	'buildCSS:watch',
	'buildJavascript:watch'
]);

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });

    gulp.watch("dist/**/*").on('change', browserSync.reload);
});

gulp.task('sync', ['default', 'watch', 'browser-sync']);
