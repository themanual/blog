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
        tasks: 'css:dev',
      },

      jekyll: {
        files: ["*.{yml,md,html}", "_*/**", "!_site/**/*"],
        tasks: 'jekyll:dev',
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
