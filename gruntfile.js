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
                    'scripts/consts.js',
                    'scripts/post.js',
                    'scripts/spPosts.js',
                    'scripts/spMenu.js',
                    'scripts/postController.js',
                    'scripts/postsController.js',
                    'scripts/routingDefinition.js',
                    'scripts/app.js'
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
                    'scripts/*.js'
                ],
                tasks: ['uglify:scripts']
            },            
            css: {
                files: [
                    'bower_components/pure/pure-min.css',
                    'bower_components/pure/grids-responsive-min.css',
                    'styles/*.css'],
                tasks: ['cssmin']
            }
        }
    });
    // Default task.  
    grunt.registerTask('default', ['uglify', 'cssmin']);
};