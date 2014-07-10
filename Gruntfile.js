
// The "wrapper" function
module.exports = function(grunt) {
    // Do grunt-related things in here
    // Project configuration.
    grunt.initConfig({
        // imports the JSON metadata stored in package.json
        pkg: grunt.file.readJSON('package.json'),
        // compiles LESS file to minified CSS
        jekyll: {
            dev: {
                src: 'templates',
                dest: 'dev'
            }
        },
        less: {
            minifiedLess: {
                options: {
                    paths: ["./src/less", "./src/demo/less"],
                    cleancss: true
                },
                files: {
                    "./src/css/main.less-minified.css": "./src/less/bellmaker.less"
                }
            },
            uncompressedLess: {
                options: {
                    paths: ["./src/less", "./src/demo/less"],
                    cleancss: false
                },
                files: {
                    "./src/css/main.less.css": "./src/less/bellmaker.less"
                }
            },
            basicDemoLess: {
                options: {
                    paths: ["./src/less", "./src/demo/basic_demo/less"],
                    cleancss: false
                },
                files: {
                    "./src/demo/basic_demo/css/main.css": "./src/demo/basic_demo/less/imports.less"
                }  
            },
            bootstrapDemoLess: {
                options: {
                    paths: ["./src/less", "./src/demo/bootstrap_demo/less"],
                    cleancss: true
                },
                files: {
                    "./src/demo/bootstrap_demo/css/main.css": "./src/demo/bootstrap_demo/less/imports.less"
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
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('makeJekyll', [
        // 'uglify'
        'jekyll'
    ]);

    grunt.registerTask('default', [
        // 'uglify'
        'less:minifiedLess',
        'less:uncompressedLess',
        'sass',
        'watch'
    ]);
};