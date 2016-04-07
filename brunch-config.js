const karmaConf = {
  CI: {
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
  },
  testing: {
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'chai'],
    files: [
      'public/javascripts/vendor.js',
      'public/javascripts/app.js',
      'public/javascripts/specs.js'
    ],
    singleRun: true
  }
};

exports.config = {
  paths: {
    watched: ['app', 'specs']
  },
  files: {
    javascripts: {
      defaultExtension: 'js',
      joinTo: {
        'javascripts/app.js': /^app/,
        'javascripts/specs.js': /^specs/,
        'javascripts/vendor.js': /^(?!app|specs)/
      }
    },
    stylesheets: {
      defaultExtension: 'styl',
      joinTo: 'stylesheets/app.css'
    },
    templates: {
      defaultExtension: 'hbs',
      joinTo: 'javascripts/app.js'
    }
  },
  npm: {
    styles: {
      bootstrap: ['dist/css/bootstrap.css']
    },
    globals: {
      $: 'jquery',
      Marionette: 'backbone.marionette',
      Backbone: 'backbone'
    }
  },
  plugins: {
    babel: {
      presets: ['es2015'],
      ignore: [
        /^(node_modules)/
      ]
    }
  },
  modules: {
    autoRequire: {
      'javascripts/app.js': ['initialize']
    }
  },
  server: {
    port: 8080,
    run: true
  },
  overrides: {
    testing: {
      modules: {
        autoRequire: {
          'javascripts/specs.js': ['specs/initialize']
        }
      },
      plugins: {
        karma: karmaConf.testing
      }
    },
    CI: {
      modules: {
        autoRequire: {
          'javascripts/specs.js': ['specs/initialize']
        }
      },
      plugins: {
        karma: karmaConf.CI
      }
    }
  }
};
