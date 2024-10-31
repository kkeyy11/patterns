// builder.js
class Product {
    constructor() {
        this.parts = [];
    }

    addPart(part) {
        this.parts.push(part);
    }
}

class Builder {
    constructor() {
        this.product = new Product();
    }

    buildPartA() {
        this.product.addPart("Part A");
    }

    buildPartB() {
        this.product.addPart("Part B");
    }

    getResult() {
        return this.product;
    }
}

// Usage
const builder = new Builder();
builder.buildPartA();
builder.buildPartB();
const product = builder.getResult();
console.log(product.parts);
