var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("compileTS", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("./web/js"));
});
gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./web/css'));
});
gulp.task('watch-dev', watchingDevFiles);
gulp.task('build-dev',['sass','compileTS']);
gulp.task('development',['watch-dev','build-dev'],function(){}, {
        aliases: ['dev', 'd']
    });
function watchingDevFiles(){
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./typeScript/**/*.ts', ['compileTS']);
}