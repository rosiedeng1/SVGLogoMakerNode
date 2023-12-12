const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square} = require('./lib/shapes');


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
        if (data.shape == 'Circle') {
            let circleShape = new Circle(data.shapecolor, data.textcolor, data.text)
            fs.writeFile(fileName, circleShape.render(), (err) =>
                err ? console.log(err) : console.log(`Generated logo.svg`)
            );
        }
        if (data.shape == 'Square') {
            let squareShape = new Square(data.shapecolor, data.textcolor, data.text)
            fs.writeFile(fileName, squareShape.render(), (err) =>
                err ? console.log(err) : console.log(`Generated logo.svg`)
            );
        }
    });





