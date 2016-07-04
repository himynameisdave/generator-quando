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
    '/modules/button/_index.scss',
    '/modules/button/partials/_base.scss',
    '/modules/button/partials/_layout.scss',
    '/modules/button/partials/_modifier.scss',
    '/modules/button/partials/_state.scss',
    '/modules/button/partials/_theme.scss',
    '/modules/heading/_index.scss',
    '/modules/heading/partials/_base.scss',
    '/modules/heading/partials/_layout.scss',
    '/modules/heading/partials/_modifier.scss',
    '/modules/heading/partials/_state.scss',
    '/modules/heading/partials/_theme.scss',
    '/modules/link/_index.scss',
    '/modules/link/partials/_base.scss',
    '/modules/link/partials/_layout.scss',
    '/modules/link/partials/_modifier.scss',
    '/modules/link/partials/_state.scss',
    '/modules/link/partials/_theme.scss',
    '/modules/text/_index.scss',
    '/modules/text/partials/_base.scss',
    '/modules/text/partials/_layout.scss',
    '/modules/text/partials/_modifier.scss',
    '/modules/text/partials/_state.scss',
    '/modules/text/partials/_theme.scss'
  ].map(file => fileGenerator(file))
  // ,
  // layouts: [
  //   '/layouts/file'
  // ].map(file => fileGenerator(file))
};

module.exports = projectFiles;
