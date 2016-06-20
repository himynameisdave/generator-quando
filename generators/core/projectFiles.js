//  Util for generating template/dest pairs
const fileGenerator = require('../../utils/fileGenerator');
const projectFiles = {
  //  Files we need to template out
  template: [
    'readme.md',
    'package.json'
  ].map(file => fileGenerator(file)),
  //  Files we just need to copy
  copy: [
    'webpack-index-template.ejs',
    'webpack.config.js',
    '.babelrc',
    '.eslintrc',
    '/server/router.js',
    '/server/server.js',
    '/src/index.js',
    '/src/App.js',
    '/src/actions/AsyncDispatcher.js',
    '/src/actions/index.js',
    '/src/actions/sample.js',
    '/src/reducers/defaultState.js',
    '/src/reducers/index.js',
    '/src/components/modules/Button.js',
    '/src/components/modules/Heading.js',
    '/src/components/modules/Link.js',
    '/src/components/modules/Text.js'
  ].map(file => fileGenerator(file))
};

module.exports = projectFiles;
