module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      dist: {
        cwd: 'src/', expand: true, src: '**', dest: 'dist/'
      }
    },
    cssmin: {
      dist: {
        files: [
          { src: 'dist/static/leaflet/leaflet.css', dest: 'dist/static/leaflet/leaflet.min.css' }
        ],
        options: {
          keepSpecialComments: 0
        }
      }
    },
    concat: {
        dist: {
            files: {
                'dist/static/libs.js': [
                    'apikeys.js',
					'dist/static/leaflet/leaflet.js',
					'dist/static/leaflet/leaflet-google.js',
					'dist/static/leaflet/leaflet-bing.js',
                    'dist/static/jquery-2.2.2.min.js',
                    'dist/static/dygraph-combined.js',
                ]
            },
        },
    },
    processhtml: {
      dist: {
        files: {
        'dist/index.html': ['src/index.html']
        }
      }
    },
    compress: {
      dist: {
        options: {
          mode: 'gzip'
        },
        expand: true,
        cwd: 'dist/',
        src: ['index.html',
              'static/leaflet/leaflet.min.css',
              'static/libs.js'
        ],
        dest: 'dist/'
      }
    }
  });
  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-compress');
  // Default tasks.
  grunt.registerTask('default', ['copy', 'cssmin', 'concat', 'processhtml']);//, 'compress']);
};
