const gulp = require('gulp');

gulp.task('default', function(){
    gulp.src("public/js/**/*.js")
    .pipe(eslint())
    .pipe(eslint().format());
    
    gulp.src("public/js/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"));
});

