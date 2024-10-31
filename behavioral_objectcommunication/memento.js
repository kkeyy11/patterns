// memento.js
class Memento {
    constructor(state) {
        this.state = state;
    }
}

class Originator {
    constructor() {
        this.state = null;
    }

    setState(state) {
        this.state = state;
    }

    save() {
        return new Memento(this.state);
    }

    restore(memento) {
        this.state = memento.state;
    }
}

// Usage
const originator = new Originator();
originator.setState("State1");
const savedState = originator.save();
originator.setState("State2");
originator.restore(savedState);
