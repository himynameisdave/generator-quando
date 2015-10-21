'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;



describe('quando:app', function () {

  //  Skips the install

  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      // .withPrompts({ someOption: true })
      .on('end', done);
  });

  //  It creates files

  it('creates a Procfile', function () {
    assert.file([
      'Procfile'
    ]);
  });

  it('creates a package.json', function () {
    assert.file([
      'package.json'
    ]);
  });

  it('creates a webpack.config.js & a common config', function () {
    assert.file([
      'webpack.config.js',
      'webpack.common.config.js'
    ]);
  });

  it('creates a server.js', function () {
    assert.file([
      'server.js'
    ]);
  });

  it('creates a dist/index.html', function () {
    assert.file([
      'dist/index.html'
    ]);
  });

  it('creates a src/js/index.js', function () {
    assert.file([
      'src/js/index.js'
    ]);
  });

  it('creates a src/css/exports/core.less', function () {
    assert.file([
      'src/css/exports/core.less'
    ]);
  });

  //  It creates folders

  it('creates a dist/', function () {
    assert.file([
      'dist/'
    ]);
  });

  it('creates a src/', function () {
    assert.file([
      'src/'
    ]);
  });

  it('creates a src/js/components/', function () {
    assert.file([
      'src/js/components/'
    ]);
  });

  it('creates a src/images/', function () {
    assert.file([
      'src/images/'
    ]);
  });

  it('creates a src/css/exports/', function () {
    assert.file([
      'src/css/exports/'
    ]);
  });


});
