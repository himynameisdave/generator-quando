//  Util for generating template/dest pairs
const fileGenerator = require('../../utils/fileGenerator');
const projectFiles = {
  configs: [
    '/configs/default/_index.scss',
    '/configs/default/partials/_colors.scss',
    '/configs/default/partials/_icons.scss',
    '/configs/default/partials/_images.scss',
    '/configs/default/partials/_layouts.scss',
    '/configs/default/partials/_typography.scss'
  ].map(file => fileGenerator(file)),
  helpers: [
    '/helpers/mixins/_bg-cover.scss',
    '/helpers/mixins/_pre-flex-center-hack.scss',
    '/helpers/mixins/_visually-hide.scss'
  ].map(file => fileGenerator(file)),
  core: [
    '/core/_base.scss',
    '/core/_reset.scss'
  ].map(file => fileGenerator(file)),
  exports: [
    '/exports/default.scss'
  ].map(file => fileGenerator(file)),
  modules: [
    '/modules/heading/_index.scss',
    '/modules/heading/partials/_base.scss',
    '/modules/heading/partials/_layout.scss',
    '/modules/heading/partials/_modifier.scss',
    '/modules/heading/partials/_state.scss',
    '/modules/heading/partials/_theme.scss'
  ].map(file => fileGenerator(file))


  // ,
  // layouts: [
  //   '/layouts/file'
  // ].map(file => fileGenerator(file))
};

module.exports = projectFiles;
