// Imported inquirer for questions and fs to help create the file
const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');


// Questions for application using inquirer 
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
    // Makes a promise to retrieve you data that you input from the questions 
    .then((data) => {
        // Sets error if logo is more than 3 characters
        if (data.text.length>3) {
        throw new Error('Error: Logo must be up to 3 characters')
        }

        // Set fileName to equal 'logo.svg'
        const fileName = `logo.svg`;

        // Creates a file for your generated Triangle shape 
        if (data.shape == 'Triangle') {
            // new Triangle will take in super(shapecolor, textcolor and text) which calls the constructor of Shape, and sets fillShape and fillText based on data.shapecolor and data.textcolor
            let triangleShape = new Triangle(data.shapecolor, data.textcolor, data.text)
            // Writes the file with the data which generates each line you want. Takes in the methods from the Shape class constructor that your new Triangle inherits from as well as the render() in your Triangle class
            fs.writeFile(fileName,
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
            // Writes the file with the data which generates each line you want. Takes in the methods from the Shape class that your new Circle inherits from as well as the render() in your Circle class
            fs.writeFile(fileName, circleShape.insert1stLine() + '\n' +
                circleShape.render() + '\n' +
                circleShape.insertTextLine() + '\n' +
                circleShape.insertLastLine(), (err) =>
                err ? console.log(err) : console.log(`Generated logo.svg`)
            );
        }
        if (data.shape == 'Square') {
            let squareShape = new Square(data.shapecolor, data.textcolor, data.text)
            // Writes the file with the data which generates each line you want. Takes in the methods from the Shape class that your new Square inherits from as well as the render() in your Square class
            fs.writeFile(fileName,
                squareShape.insert1stLine() + '\n' +
                squareShape.render() + '\n' +
                squareShape.insertTextLine() + '\n' +
                squareShape.insertLastLine(), (err) =>
                err ? console.log(err) : console.log(`Generated logo.svg`)
            );
        }
    });





