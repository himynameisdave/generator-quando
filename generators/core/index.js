'use strict';
const yeoman = require('yeoman-generator');
const chalk = require('chalk');
const mkdirp = require('mkdirp');
const projectFiles = require('./projectFiles');
const projectDirectories = require('./projectDirectories');
const generatePrompts = require('./prompts/');
const banner = require('../../utils/banner');
const create = chalk.green('create');

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
      this.log(chalk.blue('\nBuilding Directories:\n'));
      const logDirs = projectDirectories.map(dir => {
        //  create the directories
        mkdirp.sync(dir);
        //  return a line to be logged
        return `   ${create} ${dir}\n`;
      }).join('');
      //  Log the dirs
      this.log(logDirs);
    },
    projectFiles() {
      this.log(chalk.blue('Building Project Files:\n'));
      projectFiles.template.map(file => {
        return this.fs.copyTpl(
          this.templatePath(file.template),
          this.destinationPath(file.dest),
          this.props
        )
      });
      projectFiles.copy.map(file => {
        return this.fs.copy(
          this.templatePath(file.template),
          this.destinationPath(file.dest)
        )
      });
    }
  }
  // ,
  // install() {
  //   // this.npmInstall('', function(err){
  //   //   if(err) console.log(err)
  //     console.log("EL QUANDO IS DONE FOR THE DAY!");
  //   // });
  // }
});
