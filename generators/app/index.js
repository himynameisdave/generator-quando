'use strict';
const yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  core() {
    this.composeWith('quando:core');
  },
  css() {
    this.composeWith('quando:css');
  },
  install() {
    // this.npmInstall('', function(err){
      // if(err) console.log(err)
      console.log("EL QUANDO IS DONE FOR THE DAY!");
    // });
  }
});
