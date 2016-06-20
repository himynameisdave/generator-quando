'use strict';
const yeoman = require('yeoman-generator');
const projectFiles = require('./projectFiles');
const baseCopyUrl = './src/css/';

module.exports = yeoman.generators.Base.extend({
  writing() {
    const files = Object.keys(projectFiles).map(key => projectFiles[key]).reduce((a, b) => a.concat(b));

    //TODO: finish this loopy stuff
    files.map(file => {
      console.log(file);
    });

    //  Loop this
    this.fs.copy(
      this.templatePath('exports/default.scss'),
      this.destinationPath(`${baseCopyUrl}exports/default.scss`)
    );

    // this.fs.copy(
    //   this.templatePath('configs/default/index.scss'),
    //   this.destinationPath(`${baseCopyUrl}configs/default/index.scss`)
    // );
  }
});
