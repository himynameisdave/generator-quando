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
  // core: [
  //   '/core/_base.scss',
  //   '/core/_reset.scss'
  // ].map(file => fileGenerator(file)),
  exports: [
    '/exports/default.scss'
  ].map(file => fileGenerator(file))
  // ,
  // layouts: [
  //   '/layouts/file'
  // ].map(file => fileGenerator(file))
  // ,
  // modules: [
  //   '/nope/file'
  // ].map(file => fileGenerator(file))
};

module.exports = projectFiles;
