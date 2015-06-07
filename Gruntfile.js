'use strict';

module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		requirejs: {
			compile: {
				options: require('../JSSDK/boot').extend({
					baseUrl: './',
					mainConfigFile: ['app/boot.js'],
					name: 'node_modules/almond/almond',
					out: 'app/min/app.min.js',
					deps: ['app'],
					optimize: 'none'
				})
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.registerTask('build', ['requirejs']);
};
