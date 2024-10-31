// facade.js
class SubsystemA {
    operationA() {
        return "Subsystem A operation.";
    }
}

class SubsystemB {
    operationB() {
        return "Subsystem B operation.";
    }
}

class Facade {
    constructor() {
        this.subsystemA = new SubsystemA();
        this.subsystemB = new SubsystemB();
    }

    operation() {
        return `${this.subsystemA.operationA()} ${this.subsystemB.operationB()}`;
    }
}

// Usage
const facade = new Facade();
console.log(facade.operation()); // Subsystem A operation. Subsystem B operation.
