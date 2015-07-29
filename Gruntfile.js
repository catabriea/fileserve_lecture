module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'client/scripts/app.js',
                //added scripts - now create scripts folder in assets
                dest: 'server/public/assets/scripts/app.min.js'
            }
        },
        copy: {
            bootstrap: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "bootstrap/dist/css/bootstrap.min.css",
                    //changed the ^ line of code to access css from node modules root in bootstrap
                ],
                "dest": "server/public/vendors/"
            },
            jquery: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "jquery/dist/jquery.min.js",
                    //changed the ^ line of code to access css from node modules root in bootstrap
                ],
                "dest": "server/public/vendors/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['copy', 'uglify']);

};