
module.exports = function(grunt) {

	var cfg = {
		jshint: {
			options: {
				browser: true,
				globals: [
					"chrome",
					"require",
					"define",
					"module",
					"exports"
				]
			},

			scripts: [
				"scripts/**/*.js", 
				"!scripts/lib/*.js"
			]
		}
	};

	grunt.initConfig(cfg);

	grunt.loadNpmTasks("grunt-contrib-jshint");
};