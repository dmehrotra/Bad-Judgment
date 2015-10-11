
module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass:{
            dev:{
                options:{
                    outputStyle:'expanded'
                },
                files:{
                    'src/public/css/styles.css' : 'src/public/css/src/application.scss'
                }
            }
        },
        watch:{
            js:{
                files:['src/public/js/src/vendor/*.js', 'src/public/js/src/*.js'],
                tasks:['uglify:dev']
            },
            css:{
                files:['src/public/css/src/application.scss'],
                tasks:['sass:dev']
            },
        },
        uglify: {
            options: {
                sourceMap: true
            },
            dev:{
                options:{
                    beautify: true,
                    mangle: false,
                    compress: false
                },
                files: {
                    'src/public/js/app.min.js': [ 'src/vendor/underscore.min.js','src/public/js/src/vendor/*.js', 'src/public/js/src/*.js']
                }
            },
            build: {
                files: {
                    'src/public/js/app.min.js': [ '']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default',['uglify:build']);
    grunt.registerTask('dev',['uglify:dev', 'sass:dev']);

};
