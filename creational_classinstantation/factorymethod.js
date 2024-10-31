// factoryMethod.js
class Product {
    use() {
        console.log("Using Product");
    }
}

class Factory {
    createProduct() {
        return new Product();
    }
}

// Usage
const factory = new Factory();
const product = factory.createProduct();
product.use();
