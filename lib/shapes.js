class Shape {
    constructor(fillShape, fillText, logo) {
        this.fillShape = fillShape;
        this.fillText = fillText
        this.logo = logo
    }

    insert1stLine() {
        return '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">'
    }

    insertLastLine() {
        return '</svg>'
    }

    insertTextLine() {
        return `<text x="150" y="125" fill="${this.fillText}" font-size="30" text-anchor="middle"> ${this.logo} </text>`
    }

    render() {
        throw new Error('');
    }

    setColor(shapeColor) {
        this.fillShape=shapeColor
    }

}

class Triangle extends Shape {
    render() {
        return '<polygon points="150, 18 244, 182 56, 182" fill="' + this.fillShape + '" />'
        // return this.insert1stLine() + '\n' + 
        // '<polygon points="150,18 244,182 56,182" fill="' + this.fillShape + '" />' + '\n' + 
        // this.insertTextLine() + '\n' + 
        // this.insertLastLine()
    }

}


class Circle extends Shape {
    render() {
        return '<circle cx="150" cy="100" r="100" fill="' + this.fillShape + '" />'
        
        // this.insert1stLine() + '\n' + 
        // circleShape.render()
        // this.insertTextLine() + '\n' + 
        // this.insertLastLine()

    }
   
}


class Square extends Shape {
    render() {
        return '<rect x="70" y="40" width="150" height="150" fill="' + this.fillShape + '" />'
        
        this.insert1stLine() + '\n' + 
        squareShape.render() + '\n' +
        this.insertTextLine() + '\n' + 
        this.insertLastLine()
    }

   
}

module.exports = {Square, Triangle, Circle}


