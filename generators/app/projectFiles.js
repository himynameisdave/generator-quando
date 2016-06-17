
//  Generates a template/dest pair for yeoman to consume
const fileGenerator = (template, dest = template) => {
  if (template.indexOf('/') === -1) return { template: `_${template}`, dest };
  //  if it's path-like, we just gotta parse it a bit
  const dirs = template.split('/');
  const file = dirs[dirs.length - 1];
  dirs.pop();
  return { template: `${dirs.join('/')}/_${file}`, dest };
};

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
    '/src/App.js'
  ].map(file => fileGenerator(file))
};


module.exports = projectFiles;
