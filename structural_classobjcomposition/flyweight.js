// flyweight.js
class Flyweight {
    constructor(sharedState) {
        this.sharedState = sharedState;
    }

    operation(uniqueState) {
        console.log(`Flyweight: ${this.sharedState}, Unique: ${uniqueState}`);
    }
}

class FlyweightFactory {
    constructor() {
        this.flyweights = {};
    }

    getFlyweight(sharedState) {
        if (!this.flyweights[sharedState]) {
            this.flyweights[sharedState] = new Flyweight(sharedState);
        }
        return this.flyweights[sharedState];
    }
}

// Usage
const factory = new FlyweightFactory();
const flyweight1 = factory.getFlyweight("State1");
const flyweight2 = factory.getFlyweight("State1");
flyweight1.operation("Unique1");
flyweight2.operation("Unique2"); // Reuses the same Flyweight instance
