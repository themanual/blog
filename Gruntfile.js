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
      },

      reload: {
        options: { message: 'Live Reload' }
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

      css: {
        files: 'assets/scss/**/*',
        tasks: ['css:dev', 'notify:css'],
      },

      jekyll: {
        files: ["*.{yml,md,html}", "_*/**", "!_site/**/*"],
        tasks: ['jekyll:dev', 'notify:jekyll'],
      },

      reload: {
        files: ["_site/**/*"],
        tasks: ['notify:reload'],
        options: {
          livereload: true
        }
      }
    }



  });


  // Tasks
  grunt.registerTask('css:dev', ['sass:dev', 'copy:css']);

  // Build assets and jekyll
  grunt.registerTask('build:dev', ['sass:dev', 'jekyll:dev']);

  // Build for development, and watch
  grunt.registerTask('work',      ['build:dev', 'watch'])
  grunt.registerTask('default',   'work');

};
