const inquirer = require('inquirer');
const fs = require('fs');
const {Square, Triangle, Circle} = require('./lib/shapes');


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
        const fileName = `logo.svg`;
        if (data.shape == 'Triangle') {
            let triangleShape = new Triangle(data.shapecolor, data.textcolor, data.text)
            fs.writeFile(fileName, triangleShape.render(), (err) =>
                err ? console.log(err) : console.log(`Generated logo.svg`)
            );
        }

        // fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) =>
        //     err ? console.log(err) : console.log(`Generated logo.svg`)
        // );
    });





