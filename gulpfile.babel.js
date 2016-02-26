import gulp from 'gulp';
import nunjucks from 'gulp-nunjucks';
import config from './config.json';

gulp.task('compile:html', () => {
  gulp.src('templates/[a-zA-Z0-9]*')
    .pipe(nunjucks.compile(config))
    .pipe(gulp.dest('build/hotspot'));
});
