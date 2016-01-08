exports.config = {
  paths: {
    watched: ['app', 'specs']
  },
  files: {
    javascripts: {
      defaultExtension: "js",
      joinTo: {
        "javascripts/app.js": /^app/,
        "javascripts/specs.js": /^specs/,
        "javascripts/vendor.js": /^bower_components/
      },
      order: {
        before: [
          'bower_components/jquery/dist/jquery.js',
          'bower_components/underscore/underscore.js',
          'bower_components/backbone/backbone.js',
          'bower_components/marionette/lib/backbone.marionette.js',
          'bower_components/bootstrap/dist/js/bootstrap.js'
        ]
      }
    },
    stylesheets: {
      defaultExtension: "styl",
      joinTo: "stylesheets/app.css"
    },
    templates: {
      defaultExtension: "hbs",
      joinTo: "javascripts/app.js"
    }
  },
  plugins: {
    babel: {
      presets: ['es2015'],
      ignore: [
        /^(bower_components|vendor|node_modules)/
      ],
      pattern: /\.(es6|jsx)$/,
      plugins: ['babel-plugin-transform-decorators-legacy']
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
      }
    }
  }
};
