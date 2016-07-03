//  Prompts for the core generator
const generatePrompts = ({ defaultProjectName }) => {
  return [{
    type: 'input',
    name: 'projectName',
    message: 'What is the name of your project',
    default: defaultProjectName
  }, {
    type: 'input',
    name: 'projectDescription',
    message: 'Describe your project',
    default: 'A React/Redux app'
  }, {
    type: 'confirm',
    name: 'apiServer',
    message: 'Do you need an API server?',
    default: false
  }];
};

module.exports = generatePrompts;
