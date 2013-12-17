module.exports = function(grunt) {
  
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),



    // CSS:
    // * Sass
    // * Minify

    sass: {
      dev: {
        options: {
          style:        'expanded',
          lineNumbers:  'true',
          loadPath:     ['bower_components']
        },
        files: [
          {
            expand: true,
            cwd:  'assets/css/src/',
            src:  ['*.scss', '!_*.scss'],
            dest: 'assets/css/build/',
            ext:  '.css'
          }
        ]
      }
    },

    cssmin: {
      minify: {
        expand: true,
        cwd:  'assets/css/build/',
        src:  ['*.css', '!*.min.css'],
        dest: 'assets/css/build/',
        ext:  '.min.css'
      }
    },





    // JS:
    // * Hint
    // * Concat
    // * Minify

    jshint: {
      files: ['Gruntfile.js', 'assets/js/src/*.js'],
      options: {
        expr: true,
        sub: true,
        globals: {
          jQuery: true,
          console: true
        }
      }
    },

    concat: {
      js: {
        src: [
          'bower_components/jquery/jquery.js',
          'bower_components/fitvids/jquery.fitvids.js',
          'assets/js/src/_plugins.js',
          'assets/js/src/_setup.js',
          'assets/js/src/main.js'
        ],
        dest: 'assets/js/build/scripts.js'
      }
    },

    uglify: {
      dev: {
        expand: true,
        cwd:    'assets/js/build/',
        src:    ['*.js', "!*.min.js"],
        dest:   'assets/js/build/',
        ext:    '.min.js'
      }
    },

    



    // Reload-realted Tasks:
    // * Copy assets on the fly
    // * Display notifications
    copy: {
      css: {
        expand: true,
        cwd:    'assets/css/build/',
        src:    '*.css',
        dest:   '_site/assets/css/build/'
      },

      js: {
        expand: true,
        cwd:    'assets/js/build/',
        src:    '*.js',
        dest:   '_site/assets/js/build/'
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
        files: 'assets/css/src/**/*',
        tasks: ['css:dev', 'copy:css', 'notify:css'],
      },

      js: {
        files: ['assets/js/src/**/*'],
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
  grunt.registerTask('js:dev',  ['jshint', 'concat:js', 'uglify']);

  // Build CSS, JS, and Jekyll
  grunt.registerTask('build:dev', ['css:dev', 'js:dev', 'jekyll:dev']);

  // Build for development, and watch
  grunt.registerTask('default',   ['build:dev', 'watch']);

};
