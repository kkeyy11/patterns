// singleton.js
class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
    }

    someMethod() {
        console.log("Method of Singleton instance");
    }
}

// Usage
const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2); // true
