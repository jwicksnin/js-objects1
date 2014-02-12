module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      globals: //to be ok, etc
      allFiles: [
        'Gruntfile.js',
        'test/*.js',
        // '<%= nodeunit.tests %>',
      ]
    },
    simplemocha: {
      options: {
        timeout: 3000
      },
      all: {
        src: ['test/*.js']
      }
    }

});

grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-simple-mocha');

grunt.registerTask('default', ['simplemocha', 'jshint']);

};
