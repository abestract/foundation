module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      coffee: {
        files: ['coffee-script/*.coffee'],
        tasks: 'coffee'
      },
      jade: {
        files: '*.jade',
        tasks: [ 'jade' ]
      },
      css: {
        files: ['scss/*.scss'],
          tasks: ['sass'],
          options: {
              spawn: false
            }
      }
    },
    coffee: {
      compile: {
        files: [{
          expand: true,
          cwd: 'coffee-script',
          src: '**/*.coffee',
          dest: 'dist/js',
          ext: '.js'
        }]
      }
    },
    sass: {
      options: {
        loadPath: ['bower_components/foundation/scss']
      },
      dist: {
          options: {
              sourcemap: 'none',
              style: 'nested'
          },
          files: [{
            expand: true,
            cwd: 'scss',
            src: ['*.scss'],
            dest: 'dist/css',
            ext: '.css'
          }]
      } 
    },
    jade: {
      compile: {
        options: {
            client: false,
            pretty: true
        },
        files: [ {
          src: "*.jade",
          dest: "dist/",
          expand: true,
          ext: ".html"
        } ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jade');
  //grunt.loadNpmTasks('grunt-libsass');

  // Default task.
  grunt.registerTask('default', ['watch', 'coffee', 'sass', 'jade']);
};