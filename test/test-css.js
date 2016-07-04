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


  it('creates the css exports file', () => {
    assert.file([
      './src/css/exports/default.scss'
    ]);
  });

  it('creates the css config files', () => {
    assert.file([
      './src/css/configs/default/_index.scss',
      './src/css/configs/default/partials/_colors.scss',
      './src/css/configs/default/partials/_icons.scss',
      './src/css/configs/default/partials/_images.scss',
      './src/css/configs/default/partials/_layouts.scss',
      './src/css/configs/default/partials/_typography.scss'
    ]);
  });

  it('creates the css core files', () => {
    assert.file([
      './src/css/core/_reset.scss',
      './src/css/core/_base.scss'
    ]);
  });

  it('creates the css helper files', () => {
    assert.file([
      './src/css/helpers/mixins/_bg-cover.scss',
      './src/css/helpers/mixins/_pre-flex-center-hack.scss',
      './src/css/helpers/mixins/_visually-hide.scss'
    ]);
  });

  it('creates the css modules/heading files', () => {
    assert.file([
      './src/css/modules/heading/_index.scss',
      './src/css/modules/heading/partials/_base.scss',
      './src/css/modules/heading/partials/_layout.scss',
      './src/css/modules/heading/partials/_modifier.scss',
      './src/css/modules/heading/partials/_state.scss',
      './src/css/modules/heading/partials/_theme.scss'
    ]);
  });
});
