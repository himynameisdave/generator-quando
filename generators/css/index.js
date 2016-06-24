'use strict';
const yeoman = require('yeoman-generator');
const projectFiles = require('./projectFiles');
const baseCopyUrl = './src/css/';

module.exports = yeoman.generators.Base.extend({
  writing() {
    //  Flatten/removes nesting (which is only for simpler organization)
    const files = Object.keys(projectFiles).map(key => projectFiles[key]).reduce((a, b) => a.concat(b));
    //  Iterate over each of our files
    files.map(file => {
      console.log(file);
      // this.fs.copy(
      //   this.templatePath(file.template),
      //   this.destinationPath(file.dest)
      // );
    });
  }
});
