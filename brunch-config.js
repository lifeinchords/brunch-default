exports.config = {

  files: {

    javascripts: {
      joinTo: {
        'js/app.js': /^app/,
        'js/lib.js': /^(bower_components|vendor)/
      }
    },

    stylesheets: {
      joinTo: 'stylesheets/app.css'
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

