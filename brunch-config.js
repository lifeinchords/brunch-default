exports.config = {

  files: {

    javascripts: {
      joinTo: {
        'js/app.js': /^app[\\\/]js/,
        'js/vendor.js': /^(bower_components|vendor)/
      }
    },

    stylesheets: {
      joinTo: { 
        'stylesheets/app.css': /^app[\\\/]stylesheets[\\\/]app/, 
        'stylesheets/vendor.css': /^app[\\\/]stylesheets[\\\/]vendor/
      }
    }
  },

  plugins: {
    sass: {
      debug: 'comments',
      mode: 'native',
      allowCache: true
    }
  }

};


