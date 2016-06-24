//  Generates a template/dest pair for yeoman to consume
const fileGenerator = (template, dest = template) => {
  let _ = template.indexOf('_') > -1 ? '' : '_';
  if (template.indexOf('/') === -1) return { template: `${_}${template}`, dest };
  //  if it's path-like, we just gotta parse it a bit
  const dirs = template.split('/');
  const file = dirs[dirs.length - 1];
  dirs.pop();
  return { template: `${dirs.join('/')}/${_}${file}`, dest };
};

module.exports = fileGenerator;
