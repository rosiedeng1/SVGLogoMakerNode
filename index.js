const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
    type: 'input',
    name: 'text',
    message: 'What is the text for your logo (up to 3 characters)?',
    },
    {
    type: 'input',
    name: 'textcolor',
    message: 'What is the text color for your logo?',
    },
    {
    type: 'list',
    name: 'shape',
    message: 'What is the shape of your logo?',
    choices: ['Circle', 'Triangle', 'Square'],
    },
    {
    type: 'input',
    name: 'shapecolor',
    message: 'What is your shapes color?',
    },

  ])
  .then((data) => {
    const filename = `logo.svg`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log(`Generated logo.svg`)
    );
  });





