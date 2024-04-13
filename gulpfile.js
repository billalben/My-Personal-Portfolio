const gulp = require("gulp");
const cssmin = require("gulp-cssmin");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");

// Task to minify CSS files
gulp.task("minify-css", function () {
  return gulp
    .src("src/css/*.css")
    .pipe(cssmin())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("dist/css"));
});

// Task to minify JS files
gulp.task("minify-js", function () {
  return gulp
    .src("src/js/*.js")
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("dist/js"));
});

// Task to compress images
gulp.task("compress-images", function () {
  return import("gulp-imagemin").then((imagemin) =>
    gulp
      .src("src/imgs/**/*")
      .pipe(imagemin.default()) // Use imagemin.default() to access the default export
      .pipe(gulp.dest("dist/imgs"))
  );
});

// Default task
gulp.task("default", gulp.parallel("minify-css", "minify-js"));

// example: gulp default or npx gulp default
