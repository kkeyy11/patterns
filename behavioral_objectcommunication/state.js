// state.js
class State {
    handle() {}
}

class Context {
    constructor(state) {
        this.state = state;
    }

    setState(state) {
        this.state = state;
    }

    request() {
        this.state.handle();
    }
}

class ConcreteStateA extends State {
    handle() {
        console.log("Handling State A");
    }
}

class ConcreteStateB extends State {
    handle() {
        console.log("Handling State B");
    }
}

// Usage
const context = new Context(new ConcreteStateA());
context.request();
context.setState(new ConcreteStateB());
context.request();
