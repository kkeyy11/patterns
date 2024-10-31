// observer.js
class Observer {
    update(message) {
        console.log(`Received message: ${message}`);
    }
}

class Subject {
    constructor() {
        this.observers = [];
    }

    attach(observer) {
        this.observers.push(observer);
    }

    notify(message) {
        this.observers.forEach(observer => observer.update(message));
    }
}

// Usage
const subject = new Subject();
const observer = new Observer();
subject.attach(observer);
subject.notify("Hello Observers!");
