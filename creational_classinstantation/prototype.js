// prototype.js
class Prototype {
    clone() {
        return Object.assign({}, this);
    }
}

// Usage
const prototype = new Prototype();
const clone = prototype.clone();
console.log(clone);
