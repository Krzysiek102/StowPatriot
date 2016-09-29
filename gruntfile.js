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
        uglify: {
            options: {
                compress: false
            },
            externals: {
                files: {
                    'bundles/externals.min.js': [
                    'bower_components/angular/angular.min.js',
                    'bower_components/angular-route/angular-route.min.js',
                ],
                }
            },
            scripts:{
                files: {
                    'bundles/scripts.min.js': [
                    'scripts/domain/consts.js',
                    'scripts/domain/post.js',
                    'scripts/domain/spPosts.js',
                    'scripts/domain/spMenu.js',
                    'scripts/domain/postController.js',
                    'scripts/domain/postsController.js',
                    'scripts/domain/routingDefinition.js',
                    'scripts/domain/app.js'
                ],
                }                
            }
        },
        watch: {
            externals: {
                files: [
                    'bower_components/angular/angular.min.js',
                    'bower_components/angular-route/angular-route.min.js',
                ],
                tasks: ['uglify:externals']
            },
            scripts: {
                files: [
                    'scripts/domain/consts.js',
                    'scripts/domain/post.js',
                    'scripts/domain/spPosts.js',
                    'scripts/domain/spMenu.js',
                    'scripts/domain/postController.js',
                    'scripts/domain/postsController.js',
                    'scripts/domain/routingDefinition.js',
                    'scripts/domain/app.js'
                ],
                tasks: ['uglify:scripts']
            },            
            css: {
                files: [
                    'bower_components/pure/pure-min.css',
                    'bower_components/pure/grids-responsive-min.css',
                    'styles/blog.css',
                    'styles/app.css'],
                tasks: ['cssmin']
            }
        }
    });
    // Default task.  
    grunt.registerTask('default', ['uglify', 'cssmin']);
};