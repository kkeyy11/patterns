// templateMethod.js
class AbstractClass {
    templateMethod() {
        this.stepOne();
        this.stepTwo();
    }

    stepOne() {
        console.log("Step One");
    }

    stepTwo() {
        // To be overridden by subclasses
    }
}

class ConcreteClass extends AbstractClass {
    stepTwo() {
        console.log("Step Two from Concrete Class");
    }
}

// Usage
const concrete = new ConcreteClass();
concrete.templateMethod();
