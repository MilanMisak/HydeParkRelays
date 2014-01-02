module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            options: {
                compress: true
            },
            development: {
                files: {
                    'assets/css/style.min.css': 'assets/css/style.less'
                }
            },
        },
        uglify: {
            development: {
                options: {
                    preserveComments: false
                },
                files: {
                    'assets/js/scripts.min.js': ['assets/js/jquery-2.0.3.min.js', 'assets/js/jquery.swipebox.min.js', 'assets/js/index.js']
                }
            }
        },
        watch: {
            scripts: {
                files: '**/*.less',
                tasks: ['less']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'uglify']);

};
