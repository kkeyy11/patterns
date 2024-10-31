// command.js
class Command {
    execute() {}
}

class ConcreteCommand extends Command {
    constructor(receiver) {
        super();
        this.receiver = receiver;
    }

    execute() {
        this.receiver.action();
    }
}

class Receiver {
    action() {
        console.log("Receiver action executed!");
    }
}

// Usage
const receiver = new Receiver();
const command = new ConcreteCommand(receiver);
command.execute();
