
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
                    "./src/css/main.less-minified.css": "./src/less/main.less"
                }
            },
            uncompressedLess: {
                options: {
                    paths: ["./src/less", "./src/demo/less"],
                    cleancss: false
                },
                files: {
                    "./src/css/main.less.css": "./src/less/main.less"
                }
            }
        },
        sass: {
            minifiedSass: {
                options: {
                    style: 'compressed',
                    precision: 4
                },
                files: {
                    "./src/css/main.sass-minified.css": "./src/sass/main.scss"
                }
            },
            uncompressedSass: {
                options: {
                    style: 'expanded',
                    precision: 4
                },
                files: {
                    "./src/css/main.sass.css": "./src/sass/main.scss"
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
            },
            sass: {
                files: ["./src/sass/*", "./src/demo/sass/*"],
                tasks: ['sass']  
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        // 'uglify'
        'less',
        'sass',
        'watch'
    ]);
};