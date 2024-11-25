const gulp = require('gulp');
const fileInclude = require('gulp-file-include');


const fileIncludeSettings = {
    prefix: '@@',
    basepath: '@file',
}

gulp.task('html', function() {
    return gulp
    .src('./src/*.html')
    .pipe(fileInclude(fileIncludeSettings))
    .pipe(gulp.dest('./dist/'))
})
