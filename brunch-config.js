exports.config = {

  files: {

    javascripts: {
      joinTo: {
        'js/app.js': /^app/,
        'js/lib.js': /^(bower_components|vendor)/
      }
    },

    stylesheets: {
      joinTo: { 
        'stylesheets/app.css': /^app/, 
        'stylesheets/lib.css': /^(vendor|bower_components)/
      }
    }

    // stylesheets: {
    //   joinTo: {
    //     'css/app.css': /^(app|vendor|bower_components)/
    //   },
    //   order: {
    //     before: ['app/styles/app.less']
    //   }
    // },

  },

  plugins: {
    sass: {
      debug: 'comments',
      mode: 'native',
      allowCache: true
    }
  }

};


