module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['mocha', 'chai'],
        files: [
            "public/javascripts/vendor.js",
            "public/javascripts/app.js",
            "public/javascripts/specs.js"
        ],
        reporters: ['coverage', 'coveralls'],
        preprocessors: {
            'public/javascripts/app.js': 'coverage'
        },
        coverageReporter: {
            type: 'lcov',
            dir: 'coverage/',
            subdir: '.'
        },
        singleRun: true
    });
};