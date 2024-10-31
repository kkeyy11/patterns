// privateClassData.js
class PrivateData {
    constructor() {
        this._data = "This is private data.";
    }

    get data() {
        return this._data;
    }

    set data(newData) {
        this._data = newData;
    }
}

// Usage
const privateData = new PrivateData();
console.log(privateData.data); // This is private data.
privateData.data = "New private data.";
console.log(privateData.data); // New private data.
