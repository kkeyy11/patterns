// adapter.js
class Adaptee {
    specificRequest() {
        return "Specific request from Adaptee.";
    }
}

class Adapter {
    constructor(adaptee) {
        this.adaptee = adaptee;
    }

    request() {
        return this.adaptee.specificRequest();
    }
}

// Usage
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
console.log(adapter.request()); // Specific request from Adaptee.
