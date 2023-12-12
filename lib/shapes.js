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

}

class Triangle extends Shape {
    render() {
        return this.insert1stLine() + '\n' + 
        '<polygon points="150,18 244,182 56,182" fill="' + this.fillShape + '" />' + '\n' + 
        this.insertTextLine() + '\n' + 
        this.insertLastLine()
    }
}


class Circle extends Shape {
    render() {
        return this.insert1stLine() + '\n' + 
        '<circle cx="150" cy="100" r="80" fill="' + this.fillShape + '" />' + '\n' +
        this.insertTextLine() + '\n' + 
        this.insertLastLine()

    }
}


class Square extends Shape {
    render() {
        return this.insert1stLine() + '\n' + 
        '<rect x="70" y="40" width="150" height="150" fill="' + this.fillShape + '"/>' + '\n' +
        this.insertTextLine() + '\n' + 
        this.insertLastLine()
    }
}

module.exports = {Square, Triangle, Circle}


