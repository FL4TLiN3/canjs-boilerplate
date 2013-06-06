module.exports = function(grunt) {
    var pkg = grunt.file.readJSON('package.json');

    grunt.initConfig({
        requirejs: {
            compile: {
                options: {
                    baseUrl: 'asset/js',
                    name: 'main',
                    out: 'public/js/xmatome.min.js'
                }
            }
        },
        compass: {
            dev: {
                options: {
                    sassDir: 'asset/style/',
                    cssDir: 'pub/css/'
                }
            }
        },
        watch: {
            requirejs: {
                files: ['src/**/*.js'],
                tasks: ['requirejs'],
                options: {
                    livereload: true
                }
            },
            compass: {
                files: ['asset/style/**/*.scss'],
                tasks: ['compass'],
                options: {
                    livereload: true
                }
            }
        }
    });

    for (var key in pkg.devDependencies) {
        if (/grunt-/.test(key)) {
            grunt.loadNpmTasks(key);
        }
    }

    grunt.registerTask('dev',  ['requirejs', 'compass', 'watch']);
};
