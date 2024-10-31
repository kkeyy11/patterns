// strategy.js
class Strategy {
    execute() {}
}

class ConcreteStrategyA extends Strategy {
    execute() {
        console.log("Executing Strategy A");
    }
}

class ConcreteStrategyB extends Strategy {
    execute() {
        console.log("Executing Strategy B");
    }
}

// Usage
function context(strategy) {
    strategy.execute();
}

context(new ConcreteStrategyA());
context(new ConcreteStrategyB());
