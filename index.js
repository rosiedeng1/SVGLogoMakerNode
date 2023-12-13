const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');


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
        // Sets error if logo is more than 3 characters
        if (data.text.length>3) {
        throw new Error('Error: Logo must be up to 3 characters')
        }

        const fileName = `logo.svg`;
        if (data.shape == 'Triangle') {
            let triangleShape = new Triangle(data.shapecolor, data.textcolor, data.text)
            fs.writeFile(fileName,

                // triangleShape.render()
                triangleShape.insert1stLine() + '\n' +
                triangleShape.render() + '\n' +
                triangleShape.insertTextLine() + '\n' +
                triangleShape.insertLastLine()
                , (err) =>
                    err ? console.log(err) : console.log(`Generated logo.svg`)
            );
        }
        if (data.shape == 'Circle') {
            let circleShape = new Circle(data.shapecolor, data.textcolor, data.text)
            fs.writeFile(fileName, circleShape.insert1stLine() + '\n' +
                circleShape.render() + '\n' +
                circleShape.insertTextLine() + '\n' +
                circleShape.insertLastLine(), (err) =>
                err ? console.log(err) : console.log(`Generated logo.svg`)
            );
        }
        if (data.shape == 'Square') {
            let squareShape = new Square(data.shapecolor, data.textcolor, data.text)
            fs.writeFile(fileName,
                squareShape.insert1stLine() + '\n' +
                squareShape.render() + '\n' +
                squareShape.insertTextLine() + '\n' +
                squareShape.insertLastLine(), (err) =>
                err ? console.log(err) : console.log(`Generated logo.svg`)
            );
        }
    });





