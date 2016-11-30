module.exports = function (grunt) {
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    // Project configuration.  
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            styles: {
                files: {
                    'bundles/styles.min.css': [
                        'bower_components/pure/pure-min.css',
                        'bower_components/pure/grids-responsive-min.css',
                        'styles/blog.css',
                        'styles/app.css']
                }
            }
        },
        concat: {
            externals: {
                src: [
                    'bower_components/angular/angular.min.js',
                    'bower_components/angular-route/angular-route.min.js',
                ],
                dest: 'bundles/externals.min.js',
            },
            scripts: {
                src: [
                    'scripts/consts.js',
                    'scripts/post.js',
                    'scripts/postService.js',
                    'scripts/spMenu.js',
                    'scripts/postController.js',
                    'scripts/postsController.js',
                    'scripts/routingDefinition.js',
                    'scripts/app.js'
                ],
                dest: 'bundles/scripts.min.js',
            }
        },
        watch: {
            externals: {
                files: [
                    'bower_components/angular/angular.min.js',
                    'bower_components/angular-route/angular-route.min.js',
                ],
                tasks: ['concat:externals']
            },
            scripts: {
                files: [
                    'scripts/*.js'
                ],
                tasks: ['concat:scripts']
            },
            css: {
                files: [
                    'bower_components/pure/pure-min.css',
                    'bower_components/pure/grids-responsive-min.css',
                    'styles/*.css'],
                tasks: ['cssmin']
            }
        },
        ftp_push: {
            deploy: {
                options: {
                    authKey: "ugu",
                    host: "stowpatriot.ugu.pl",
                    dest: "/",
                    port: 21
                },
                files: [
                    {
                        expand: true,
                        cwd: '.',
                        src: [
                            "images/**/*",
                            "favicon.ico",
                            "pages/**/*",
                            "bundles/**/*",
                            "index.html"
                        ]
                    }
                ]
            },
            deployCustom: {
                options: {
                    authKey: "ugu",
                    host: "stowpatriot.ugu.pl",
                    dest: "/",
                    port: 21
                },
                files: [
                    {
                        expand: true,
                        cwd: '.',
                        src: [
                            "pages/**/*",
                            "bundles/scripts.min.js",
                            "bundles/styles.min.css",
                            "index.html"
                        ]
                    }
                ]
            },
            deployScripts: {
                options: {
                    authKey: "ugu",
                    host: "stowpatriot.ugu.pl",
                    dest: "/",
                    port: 21
                },
                files: [
                    {
                        expand: true,
                        cwd: '.',
                        src: [
                            "bundles/scripts.min.js",
                        ]
                    }
                ]
            }
        }
    });
    // Default task.  
    grunt.registerTask('default', ['concat', 'cssmin']);
    grunt.registerTask('scripts', ['concat:scripts']);
    grunt.registerTask('deploy', ['ftp_push:deploy']);
    grunt.registerTask('deploy-custom', ['ftp_push:deployCustom']);
    grunt.registerTask('deploy-scripts', ['ftp_push:deployScripts']);
    grunt.registerTask('watch-externals', ['watch:externals']);
    grunt.registerTask('watch-scripts', ['watch:scripts']);
};