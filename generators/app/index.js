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

const projectFiles = [
  {
    template: '_readme.md',
    dest: 'readme.md',
    method: 'template'
  }, {
    template: '_package.json',
    dest: 'package.json',
    method: 'template'
  }, {
    template: '_webpack-index-template.ejs',
    dest: 'webpack-index-template.ejs',
    method: 'copy'
  }, {
    template: '_webpack-config.js',
    dest: 'webpack-config.js',
    method: 'copy'
  }
  // , {
  //   template: '',
  //   dest: '',
  //   method: ''
  // }, {
  //   template: '',
  //   dest: '',
  //   method: ''
  // }
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
    directories() {
      const logDirs = projectDirectories.map(dir => {
        //  create the directories
        mkdirp.sync(dir);
        //  return a line to be logged
        return `   create ${dir}\n`;
      }).join('');
      //  Log the dirs
      this.log(logDirs);
    },
    projectFiles() {
      projectFiles.map(file => {
        if (file.method === 'template') {
          return this.fs.copyTpl(
            this.templatePath(file.template),
            this.destinationPath(file.dest),
            this.props
          )
        }
        if (file.method === 'copy') {
          return this.fs.copy(
            this.templatePath(file.template),
            this.destinationPath(file.dest)
          )
        }
        //  if you fail to specify 'template' or 'copy', an error is thrown
        throw new Error('Learn to code, ya goof!');
      });
    }
  },
  install() {
    // this.npmInstall('', function(err){
    //   if(err) console.log(err)
    //   console.log("EL QUANDO IS DONE FOR THE DAY!");
    // });
  }
});
