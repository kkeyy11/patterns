// chainOfResponsibility.js
class Handler {
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }

    handle(request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    }
}

class ConcreteHandlerA extends Handler {
    handle(request) {
        if (request === 'A') {
            return `Handler A processed request: ${request}`;
        }
        return super.handle(request);
    }
}

class ConcreteHandlerB extends Handler {
    handle(request) {
        if (request === 'B') {
            return `Handler B processed request: ${request}`;
        }
        return super.handle(request);
    }
}

// Usage
const handlerA = new ConcreteHandlerA();
const handlerB = new ConcreteHandlerB();
handlerA.setNext(handlerB);
console.log(handlerA.handle('A')); // Handler A processed request: A
console.log(handlerA.handle('B')); // Handler B processed request: B
