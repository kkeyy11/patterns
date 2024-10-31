// composite.js
class Component {
    operation() {}
}

class Leaf extends Component {
    operation() {
        console.log("Leaf");
    }
}

class Composite extends Component {
    constructor() {
        super();
        this.children = [];
    }

    add(child) {
        this.children.push(child);
    }

    operation() {
        console.log("Composite");
        for (const child of this.children) {
            child.operation();
        }
    }
}

// Usage
const composite = new Composite();
const leaf1 = new Leaf();
const leaf2 = new Leaf();
composite.add(leaf1);
composite.add(leaf2);
composite.operation();
