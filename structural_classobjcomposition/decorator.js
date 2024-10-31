// decorator.js
class Coffee {
    cost() {
        return 5;
    }
}

class MilkDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost() + 1;
    }
}

// Usage
const coffee = new Coffee();
const milkCoffee = new MilkDecorator(coffee);
console.log(milkCoffee.cost()); // 6
