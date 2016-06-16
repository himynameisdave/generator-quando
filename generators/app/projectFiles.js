
//  Obj creator
const fileGenerator = (template, dest) => ({ template, dest });

//  The exported projectFiles
const projectFiles = {
  //  Files we need to template out
  template: [
    fileGenerator('_readme.md', 'readme.md'),
    fileGenerator('_package.json', 'package.json')
  ],
  //  Files we just need to copy
  copy: [
    fileGenerator('_webpack-index-template.ejs', 'webpack-index-template.ejs'),
    fileGenerator('_webpack.config.js', 'webpack.config.js'),
    fileGenerator('_.babelrc', '.babelrc'),
    fileGenerator('_.eslintrc', '.eslintrc')
  ]
};

module.exports = projectFiles;
