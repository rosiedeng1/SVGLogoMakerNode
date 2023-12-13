const { Triangle, Circle, Square } = require('./shapes.js');

// Test for Triangle to see that your generated Triangle matches the color and returned render() for Triangle class
describe('shapeTest', () => {

    describe('test', () => {
        it('should be a Triangle with a shape color of blue', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');            
        })

    });

    // Test for Circle to see that your generated Circle matches the color and returned render()
    describe('test', () => {
        it('should be a Circle with a shape color of yellow', () => {
            const shape = new Circle();
            shape.setColor("yellow");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="yellow" />');
        })

    });

    // Test for Square to see that your generated Square matches the color and returned render() for Square
    describe('test', () => {
        it('should be a Square with a shape color of red', () => {
            const shape = new Square();
            shape.setColor("red");
            expect(shape.render()).toEqual('<rect x="70" y="40" width="150" height="150" fill="red" />');

        })

    });
});




