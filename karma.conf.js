module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['mocha', 'es6-shim'],
        reporters: ['progress'],
        files: [
            "bower_components/chai/chai.js",
            "public/javascripts/vendor.js",
            "public/javascripts/app.js",
            "public/javascripts/specs.js"
        ]
    });
};