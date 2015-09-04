exports.config = {

  files: {

    javascripts: {
      joinTo: {
        'js/vendor.js': /^(bower_components|vendor)/,
        'js/app.js': /^app[\\\/]js/
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


