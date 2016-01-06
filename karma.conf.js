module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['mocha', 'chai', 'es6-shim'],
        reporters: ['progress'],
        files: [
            "public/javascripts/vendor.js",
            "public/javascripts/app.js",
            "public/javascripts/specs.js"
        ],
        singleRun: true
    });
};