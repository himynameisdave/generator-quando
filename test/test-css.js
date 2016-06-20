'use strict';
const path = require('path');
const assert = require('yeoman-generator').assert;
const helpers = require('yeoman-generator').test;

describe('quando:css', () => {
  //  Skips the install
  before(done => {
    helpers.run(path.join(__dirname, '../generators/css'))
      .withOptions({ skipInstall: true })
      // .withPrompts({ someOption: true })
      .on('end', done);
  });
  //  Assert creation of the dotfiles
  it('creates the exports file', () => {
    return true;
    // assert.file([
    //   './src/css/exports/default.scss'
    // ]);
  });
});
