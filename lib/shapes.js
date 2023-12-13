// Parent class Shape constructor that takes in fillShape, fillText and logo (Triangle, Circle and Square will inherit from this)
class Shape {
    constructor(fillShape, fillText, logo) {
        this.fillShape = fillShape;
        this.fillText = fillText
        this.logo = logo
    }

    //First line of text in logo.svg generated will return this string 
    insert1stLine() {
        return '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">'
    }

    // Last line of text in logo.svg generated will return this string 
    insertLastLine() {
        return '</svg>'
    }

    // Third line in generated file will return string that helps identify specified text color and logo 
    insertTextLine() {
        return `<text x="150" y="125" fill="${this.fillText}" font-size="30" text-anchor="middle"> ${this.logo} </text>`
    }

    render() {
        throw new Error('');
    }

    // setColor method to test for correct shape color
    setColor(shapeColor) {
        this.fillShape=shapeColor
    }

}

class Triangle extends Shape {
    // Triangle shape option will return string below 
    render() {
        return '<polygon points="150, 18 244, 182 56, 182" fill="' + this.fillShape + '" />'
   
    }

}

// Circle will inherit any properties from Shape 
class Circle extends Shape {
    // Circle will return the string below 
    render() {
        return '<circle cx="150" cy="100" r="100" fill="' + this.fillShape + '" />'
 
    }
   
}

// Square will inherit any properties from Shape 
class Square extends Shape {
    // Square will return string below 
    render() {
        return '<rect x="70" y="40" width="150" height="150" fill="' + this.fillShape + '" />'
    }

   
}

// Exported Square, Triangle and Circle so it can be used interchangeably in other files 
module.exports = {Square, Triangle, Circle}


