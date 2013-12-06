module.exports = function(grunt) {

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

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jekyll');

  // Default task.
  grunt.registerTask('dev',     ['sass:dev', 'jekyll:dev']);
  grunt.registerTask('work',    ['dev', 'watch'])
  grunt.registerTask('default', 'dev');

};
