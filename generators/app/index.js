'use strict';
const yeoman = require('yeoman-generator');
const mkdirp = require('mkdirp');
const banner = require('./utils/banner');
const generatePrompts = require('./prompts/');

//  The directories for the app
const projectDirectories = [
  './public/',
  './server/',
  './src/',
  './src/actions/',
  './src/components/',
  './src/css/',
  './src/images/',
  './src/reducers/'
];

module.exports = yeoman.generators.Base.extend({
  prompting() {
    const done = this.async();
    //  Get the dirs in the path to this directory
    const dirs = this.destinationRoot().split('/');
    //  guessedDefaultProjectName is the default project name based on the current directory name
    const guessedDefaultProjectName = dirs[dirs.length - 1];

    //  Start by showing the banner
    this.log(banner);
    //  Now we prompt the user for what the name of their project is
    this.prompt(generatePrompts({ defaultProjectName: guessedDefaultProjectName }), (props) => {
      this.props = props;
      done();
    });
  },
  writing: {
    app() {
      this.fs.copyTpl(
        this.templatePath('_readme.md'),
        this.destinationPath('readme.md'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        this.props
      );
    },
    directories() {
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

    projectFiles: function () {
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
