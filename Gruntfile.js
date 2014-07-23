
// The "wrapper" function
module.exports = function(grunt) {
    // Do grunt-related things in here
    // Project configuration.
    grunt.initConfig({
        // imports the JSON metadata stored in package.json
        pkg: grunt.file.readJSON('package.json'),
        // compiles LESS file to minified CSS
        less: {
            minifiedLess: {
                options: {
                    paths: ["./src/less", "./src/demo/less"],
                    cleancss: true
                },
                files: {
                    "./src/css/sunflash.less-minified.css": "./src/less/sunflash.less"
                }
            },
            uncompressedLess: {
                options: {
                    paths: ["./src/less", "./src/demo/less"],
                    cleancss: false
                },
                files: {
                    "./src/css/sunflass.less.css": "./src/less/sunflash.less"
                }
            }
        },
        watch: {
            // runs less task when any less files change
            less: {
                files: ["./src/less/*", "./src/demo/less/*"],
                tasks: ["less"]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'less',
        'watch'
    ]);
    grunt.registerTask('test', [
        'less'
    ]);
};