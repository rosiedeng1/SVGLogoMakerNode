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
        return `<text x="117" y="130" fill=${this.fillText} + 'font-size="2em">' + ${this.logo} + '</text>`
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
        return '<circle cx="150" cy="120" r="100" fill="' + this.fillShape + '" />'

    }
}


class Square extends Shape {
    render() {
        return '<rect x="70" y="40" width="150" height="150" fill="' + this.fillShape + '"/>'
    }
}

module.exports = {Square, Triangle, Circle}


