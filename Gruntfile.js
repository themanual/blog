module.exports = function(grunt) {
  
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

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



    notify: {
      
      options: {
        title: 'Grunt'
      },

      css: {
        options: { message: 'Compiled CSS' }
      },

      jekyll: {
        options: { message: 'Built Jekyll' }
      }

    },



    copy: {
      css: {
        src: 'assets/css/main.css',
        dest: '_site/assets/css/main.css'
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
        tasks: ['sass:dev', 'copy:css', 'notify:css'],
      },

      jekyll: {
        files: ["*.{yml,md,html,xml}", "_*/**", "!_site/**/*"],
        tasks: ['jekyll:dev', 'notify:jekyll'],
      }

    }



  });

  // Build assets and jekyll
  grunt.registerTask('build:dev', ['sass:dev', 'jekyll:dev']);

  // Build for development, and watch
  grunt.registerTask('work',      ['build:dev', 'watch']);
  grunt.registerTask('default',   'work');

};
