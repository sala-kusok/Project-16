global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create(),
    del: require('del'),
    config: {
        src: require('./gulp/config'),
        style: 'less', // scss
        paths: {
            html: '#src/html/*.html',
            sass: '#src/style/scss/style.scss',
            less: '#src/style/less/style.less',
            css: '#src/style/css/**',
            js: '#src/js/**/*.js',
            jquery: '#src/js/jquery.js',
            img: '#src/images/',
            webp: '#src/images/webp/',
            svg: '#src/images/svg/**/*.svg',
            fonts: '#src/fonts/'
        },
        output: {
            path: 'build',
            pathJs: 'build/js',
            pathCss: 'build/css',
            pathImg: './build/img/',
            pathFonts: './build/fonts/'
        },
        watch: {
            html: '#src/html/**/*.html',
            js: '#src/js/**/*.js',
            img: '#src/images/*.{jpg,png,gif,svg,ico,webp}',
            webp: '#src/images/webp/**/*.{jpg,png,gif}',
            svg: '#src/images/svg/**/*.svg',
        }
    }
};

$.config.src.forEach(function (path) {
    require(path)();
});