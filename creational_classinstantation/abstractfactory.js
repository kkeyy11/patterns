// abstractFactory.js
class ProductA {
    use() {
        console.log("Using Product A");
    }
}

class ProductB {
    use() {
        console.log("Using Product B");
    }
}

class AbstractFactory {
    createProductA() {}
    createProductB() {}
}

class ConcreteFactory1 extends AbstractFactory {
    createProductA() {
        return new ProductA();
    }

    createProductB() {
        return new ProductB();
    }
}

// Usage
const factory = new ConcreteFactory1();
const productA = factory.createProductA();
const productB = factory.createProductB();
productA.use();
productB.use();
