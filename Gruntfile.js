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

    // Jekyll
    jekyll: {
      dev:    { options: {drafts: true } },
      build:  { }
    },

    // Watch
    watch: {

      css: {
        files: 'assets/scss/**/*',
        tasks: ['sass:dev', 'jekyll:dev'],
      },

      jekyll: {
        files: ["*.{yml,md,html}", "_*/**", "!_site/**/*"],
        tasks: ['jekyll:dev'],
      },

      reload: {
        files: ['_site/**/*'],
        options: {
          event: ['added', 'changed'],
          livereload: true,
        }
      }
    }

  });


  // Default task.
  grunt.registerTask('dev',     ['sass:dev', 'jekyll:dev']);
  grunt.registerTask('work',    ['dev', 'watch'])
  grunt.registerTask('default', 'dev');

};
