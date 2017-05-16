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
    return gulp.src('./front-end/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./web/css'));
});
gulp.task('copyPartials', copyPartials);
gulp.task('copyImages', copyImages);
gulp.task('watch-dev', watchingDevFiles);
gulp.task('build-dev',['sass','compileTS','copyPartials','copyImages']);
gulp.task('development',['watch-dev','build-dev'],function(){}, {
        aliases: ['dev', 'd']
    });
function watchingDevFiles(){
    gulp.watch('./front-end/sass/**/*.scss', ['sass']);
    gulp.watch('./front-end/typeScript/**/*.ts', ['compileTS']);
    gulp.watch('./front-end/partials/**/*', ['copyPartials']);
    gulp.watch('./front-end/images/**/*', ['copyImages']);
}
function copyPartials() {
    return gulp.src(['./front-end/partials/**/*'])
        .pipe(gulp.dest('./web/partials'));
}
function copyImages() {
    return gulp.src(['./front-end/images/**/*'])
        .pipe(gulp.dest('./web/images'));
}