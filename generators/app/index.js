'use strict';
var yeoman = require('yeoman-generator'),
    mkdirp = require('mkdirp'),
    banner = require('./banner.js');


module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    // var done = this.async();

    this.log(banner);

    // var prompts = [{
    //   type: 'confirm',
    //   name: 'someOption',
    //   message: 'Would you like to enable this option?',
    //   default: true
    // }];

    // this.prompt(prompts, function (props) {
    //   this.props = props;
    //   // To access props later use this.props.someOption;

    //   done();
    // }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('_Procfile'),
        this.destinationPath('Procfile')
      );
      this.fs.copy(
        this.templatePath('_readme.md'),
        this.destinationPath('readme.md')
      );
      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('_webpack.config.js'),
        this.destinationPath('webpack.config.js')
      );
      this.fs.copy(
        this.templatePath('_webpack.common.config.js'),
        this.destinationPath('webpack.common.config.js')
      );
      this.fs.copy(
        this.templatePath('_server.js'),
        this.destinationPath('server.js')
      );
      this.fs.copy(
        this.templatePath('_index.html'),
        this.destinationPath('dist/index.html')
      );
      this.fs.copy(
        this.templatePath('_index.js'),
        this.destinationPath('src/js/index.js')
      );
      this.fs.copy(
        this.templatePath('_core.less'),
        this.destinationPath('src/css/exports/core.less')
      );
    },

    directories: function() {
      var dirs = [
        './dist/',
        './src/js/components',
        './src/images/'
      ],
      logDirs = "";

      dirs.forEach( function(dir){
        mkdirp.sync( dir );
        logDirs += "   create "+dir+"\n";
      });

      this.log( logDirs );
    },

    projectfiles: function () {
      // this.fs.copy(
      //   this.templatePath('editorconfig'),
      //   this.destinationPath('.editorconfig')
      // );
      // this.fs.copy(
      //   this.templatePath('jshintrc'),
      //   this.destinationPath('.jshintrc')
      // );
    }
  },

  install: function () {
    this.npmInstall('', function(err){
      if(err) console.log(err)
      console.log("EL QUANDO IS DONE FOR THE DAY!");
    });
  }
});
