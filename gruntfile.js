module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    electron: {
      windowsBuild: {
        options: {
          name: "<%= pkg.name %>",
          ignore: "(node_modules|build)",
          dir: "",
          out: "build",
          version: "0.33.1",
          platform: "win32",
          arch: "ia32"
        }
      },
      linuxBuild: {
        options: {
          name: "<%= pkg.name %>",
          ignore: "(node_modules|build)",
          dir: "",
          out: "build",
          version: "0.33.1",
          platform: "linux",
          arch: "ia32"
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-electron");
  grunt.registerTask('build', ['electron']);
};
