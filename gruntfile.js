module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    electron: {
      windowsBuild: {
        options: {
          name: "<%= pkg.name %>",
          ignore: "(node_modules|build)",
          dir: ".",
          out: "build/",
          version: "0.33.1",
          platform: "win32",
          arch: "ia32"
        }
      },
      linuxBuild: {
        options: {
          name: "<%= pkg.name %>",
          ignore: "(node_modules|build)",
          dir: ".",
          out: "build/",
          version: "0.33.1",
          platform: "linux",
          arch: "ia32"
        }
      }
    },
    compress: {
      windowsBuild: {
        options: {
          archive: "build/<%= pkg.name %>-win32-ia32-<%= pkg.version %>.zip"
        },
        files: [{
          expand: true,
          cwd: "build/<%= pkg.name %>-win32-ia32",
          src: "**"
        }]
      },
      linuxBuild: {
        options: {
          archive: "build/<%= pkg.name %>-linux-ia32-<%= pkg.version %>.zip"
        },
        files: [{
          expand: true,
          cwd: "build/<%= pkg.name %>-linux-ia32",
          src: "**"
        }]
      }
    },
    clean: {
      buildFolders: [
        "build/<%= pkg.name %>-win32-ia32",
        "build/<%= pkg.name %>-linux-ia32"
      ]
    }
  });

  grunt.loadNpmTasks("grunt-electron");
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', ['electron', 'compress', 'clean']);
};
