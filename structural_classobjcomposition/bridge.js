// bridge.js
class Implementation {
    operation() {
        console.log("Base Implementation");
    }
}

class Abstraction {
    constructor(implementation) {
        this.implementation = implementation;
    }

    operation() {
        this.implementation.operation();
    }
}

// Usage
const implementation = new Implementation();
const abstraction = new Abstraction(implementation);
abstraction.operation(); // Base Implementation
