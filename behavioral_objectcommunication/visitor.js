// visitor.js
class Visitor {
    visit(element) {
        console.log("Visiting", element.constructor.name);
    }
}

class Element {
    accept(visitor) {
        visitor.visit(this);
    }
}

class ConcreteElementA extends Element {}

// Usage
const element = new ConcreteElementA();
const visitor = new Visitor();
element.accept(visitor);
