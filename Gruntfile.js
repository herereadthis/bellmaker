
// The "wrapper" function
module.exports = function(grunt) {
    // Do grunt-related things in here
    // Project configuration.
    grunt.initConfig({
        // imports the JSON metadata stored in package.json
        pkg: grunt.file.readJSON('package.json'),
        // compiles LESS file to minified CSS
        less: {
            development: {
                options: {
                    paths: ["./src/less", "./src/demo/less"],
                    // yuicompress: true,
                    // compress: true,
                    cleancss: false
                },
                files: {
                    "./src/main.css": "./src/less/main.less"
                }
            }
        },
        watch: {
            // runs less task when any less files change
            less: {
                files: ["./src/less/*", "./src/demo/less/*"],
                tasks: ["less"]
            },
            html: {
                files: "**/*.html"
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        // 'uglify'
        'less',
        'watch'
    ]);
};