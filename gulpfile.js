
let gulp = require('gulp');
let deploy = require("gulp-gh-pages");
let options_gulp = {
    remoteUrl: "https://meganian.github.io/psd-page/",
    branch: "master"};

gulp.task('deploy', function () {
    gulp.src("dist/**/*.*")
        .pipe(deploy(options_gulp));
});


