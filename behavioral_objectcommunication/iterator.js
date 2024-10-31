// iterator.js
class Iterator {
    constructor(items) {
        this.items = items;
        this.index = 0;
    }

    next() {
        return this.index < this.items.length ? this.items[this.index++] : null;
    }

    hasNext() {
        return this.index < this.items.length;
    }
}

// Usage
const items = ['item1', 'item2', 'item3'];
const iterator = new Iterator(items);
while (iterator.hasNext()) {
    console.log(iterator.next());
}
