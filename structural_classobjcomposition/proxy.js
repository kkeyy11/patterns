// proxy.js
class RealSubject {
    request() {
        return "Real Subject Request";
    }
}

class Proxy {
    constructor(realSubject) {
        this.realSubject = realSubject;
    }

    request() {
        console.log("Proxy: Forwarding request.");
        return this.realSubject.request();
    }
}

// Usage
const realSubject = new RealSubject();
const proxy = new Proxy(realSubject);
console.log(proxy.request()); // Proxy: Forwarding request. Real Subject Request
