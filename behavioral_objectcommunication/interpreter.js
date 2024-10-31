// interpreter.js
class Expression {
    interpret(context) {}
}

class TerminalExpression extends Expression {
    constructor(value) {
        super();
        this.value = value;
    }

    interpret(context) {
        return context.includes(this.value);
    }
}

// Usage
const context = ['apple', 'banana'];
const expression = new TerminalExpression('apple');
console.log(expression.interpret(context)); // true
