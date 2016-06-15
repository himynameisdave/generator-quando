


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
  }];
};

module.exports = generatePrompts;
