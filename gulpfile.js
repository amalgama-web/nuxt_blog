var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');

gulp.task('svg-sprite', function (cb) {
    return gulp.src('assets/svg-separate/*.svg')
        .pipe(svgSprite({
            mode: {
                symbol: true
            }
        }))
        .pipe(gulp.dest('assets/img/sprites/'));
});




