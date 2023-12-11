const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

// const shape = new Circle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('circle cx="150" cy="120" r="100" fill="blue" />');

// const shape = new Sqaure();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<rect x="70" y="40" width="150" height="150" fill="blue" />');
