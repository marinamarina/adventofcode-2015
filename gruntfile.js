module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({
        babel: {
            options : {
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/es5.js' : 'js/es6.js'
                }
            }
        },
        watch: {
            files: ['js/*.js'],
            tasks: ['es6'],
        }
    });

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('es6', ['babel']);
};