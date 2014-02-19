module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
                jshintrc: '.jshintrc'
            },
      allFiles: [
        'Gruntfile.js',
        'test/deck_spec.js',
      ]
    },
    simplemocha: {
      options: {
        timeout: 3000
      },
      all: {
        src: ['test/deck_spec.js']
      }
    }

});

grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-simple-mocha');

grunt.registerTask('default', ['simplemocha', 'jshint']);

};
