const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');

/*
--TOP LEVEL FUNCTIONS--
gulp.task - Define tasks
gulp.src - Point to files to use
gulp.dest - Point to folder to output
gulp.watch - Watch files and folders for changes
*/

//Logs Message
gulp.task('message', function() {
    return console.log('Gulp is running...');

});

//COPY ALL HTML files
gulp.task('copyHtml', function(){
    gulp.src('src/*.html')
       .pipe(gulp.dest('dist'));
});

//Optimize Images
gulp.task('imageMin', function(){
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));     
});

//Minify JS

gulp.task('minify', function(){
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/images'));
        
});

//Compile Sass
gulp.task('sass', function(){
    gulp.src('src/sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('dist/css'));
      
});

gulp.task('message', ['message', 'copyHtml', 'imageMin', 'minify', 'sass' ] {
    return console.log('Gulp is running...');

});
