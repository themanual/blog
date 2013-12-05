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
      dev: {
        options: {drafts: true }
      },
      build: {

      }
    },

    // Watch
    watch: {

      css: {
        files: 'assets/scss/**/*.scss',
        tasks: ['sass:dev', 'jekyll:dev'],
      },

      jekyll: {
        files: ["*.md", "*.html", "_layouts/**/*", "_posts/**/*", "_drafts/**/*"],
        tasks: ['jekyll:dev'],
      },

      livereload: {
        files: ['_site/**/*'],
        options: { livereload: true }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jekyll');

  // Default task.
  grunt.registerTask('dev',     ['sass:dev', 'jekyll:dev']);
  grunt.registerTask('default', ['dev']);

};
