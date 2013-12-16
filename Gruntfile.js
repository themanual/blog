module.exports = function(grunt) {
  
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // Sass
    sass: {
      // Expanded, line numbers
      dev: {
        options: {
          style:        'expanded',
          lineNumbers:  'true',
          loadPath:     ['bower_components']
        },
        files: {
          'assets/css/main.css': 'assets/scss/main.scss'
        }
      }
    },

    cssmin: {
      minify: {
        src:  'assets/css/main.css',
        dest: 'assets/css/main.min.css',
      }
    },

    concat: {
      js: {
        src: [
          'bower_components/jquery/jquery.js',
          'bower_components/fitvids/jquery.fitvids.js',
          'bower_components/analytics/analytics.js',
          'assets/js/main.js'
        ],
        dest: 'assets/js/scripts.js'
      }
    },

    uglify: {
      dev: {
        src:  'assets/js/scripts.js',
        dest: 'assets/js/scripts.min.js'
      }
    },

    notify: {
      
      options: {
        title: 'Grunt'
      },

      js: {
        options: { message: 'Processed Javascript' }
      },

      css: {
        options: { message: 'Processed CSS' }
      },

      jekyll: {
        options: { message: 'Built Jekyll' }
      }

    },



    copy: {
      css: {
        src: 'assets/css/main.min.css',
        dest: '_site/assets/css/main.min.css'
      },

      js: {
        src: 'assets/js/scripts.js',
        dest: '_site/assets/js/scripts.js'
      }
    },



    // Jekyll
    jekyll: {
      dev:    { options: {drafts: true } },
      build:  { }
    },



    // Watch
    watch: {

      options: {
        livereload: true
      },

      css: {
        files: 'assets/scss/**/*',
        tasks: ['css:dev', 'copy:css', 'notify:css'],
      },

      js: {
        files: ['assets/js/*.js', "!scripts.js"],
        tasks: ['js:dev', 'copy:js', 'notify:js']
      },

      jekyll: {
        files: ["*.{yml,md,html,xml}", "_*/**", "!_site/**/*"],
        tasks: ['jekyll:dev', 'notify:jekyll'],
      }

    }


  });
  
  // Build CSS and JS
  // but do not copy or notify
  grunt.registerTask('css:dev', ['sass:dev', 'cssmin:minify']);
  grunt.registerTask('js:dev',  ['concat:js', 'uglify']);

  // Build CSS, JS, and Jekyll
  grunt.registerTask('build:dev', ['css:dev', 'js:dev', 'jekyll:dev']);

  // Build for development, and watch
  grunt.registerTask('default',   ['build:dev', 'watch']);

};
