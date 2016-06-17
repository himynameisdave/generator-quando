'use strict';
const path = require('path');
const assert = require('yeoman-generator').assert;
const helpers = require('yeoman-generator').test;

describe('quando:app', () => {
  //  Skips the install
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      // .withPrompts({ someOption: true })
      .on('end', done);
  });

  //  Assert creation of the dotfiles
  it('creates the dotfiles', () => {
    assert.file([
      '.babelrc',
      '.eslintrc'
    ]);
  });
  //  Assert creation of the readme & package
  it('creates the readme & package', () => {
    assert.file([
      'readme.md',
      'package.json'
    ]);
  });
  //  Assert creation of the webpack files
  it('creates the webpack files', () => {
    assert.file([
      'webpack-index-template.ejs',
      'webpack.config.js',
    ]);
  });
  //  Assert creation of the server files
  it('creates the server files', () => {
    assert.file([
      './server/router.js',
      './server/server.js'
    ]);
  });
  //  Assert creation of the src app
  it('creates the base src files for the app files', () => {
    assert.file([
      './src/index.js',
      './src/App.js'
    ]);
  });

  //  Assert creation of the src/actions
  it('creates src/actions files', () => {
    assert.file([
      './src/actions/AsyncDispatcher.js',
      './src/actions/index.js',
      './src/actions/sample.js'
    ]);
  });
  //  Assert creation of the src/reducers
  it('creates src/reducers files', () => {
    assert.file([
      './src/reducers/defaultState.js',
      './src/reducers/index.js'
    ]);
  });




});
