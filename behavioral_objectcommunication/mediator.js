// mediator.js
class Mediator {
    notify(sender, event) {
        // To be implemented by subclasses
    }
}

class ConcreteMediator extends Mediator {
    constructor(colleagueA, colleagueB) {
        super();
        this.colleagueA = colleagueA;
        this.colleagueB = colleagueB;
        this.colleagueA.mediator = this;
        this.colleagueB.mediator = this;
    }

    notify(sender, event) {
        if (sender === this.colleagueA && event === 'A') {
            console.log("Mediator reacts on A's event");
            this.colleagueB.doSomething();
        }
    }
}

class Colleague {
    constructor(mediator) {
        this.mediator = mediator;
    }
}

class ConcreteColleagueA extends Colleague {
    doSomething() {
        console.log("Colleague A does something");
        this.mediator.notify(this, 'A');
    }
}

class ConcreteColleagueB extends Colleague {
    doSomething() {
        console.log("Colleague B does something");
    }
}

// Usage
const colleagueA = new ConcreteColleagueA();
const colleagueB = new ConcreteColleagueB();
const mediator = new ConcreteMediator(colleagueA, colleagueB);
colleagueA.doSomething();
