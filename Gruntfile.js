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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task.
  grunt.registerTask('default', ['sass:dev']);

};
