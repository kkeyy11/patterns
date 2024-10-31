// objectPool.js
class ObjectPool {
    constructor() {
        this.available = [];
        this.inUse = [];
    }

    acquire() {
        const obj = this.available.length ? this.available.pop() : {};
        this.inUse.push(obj);
        return obj;
    }

    release(obj) {
        this.inUse = this.inUse.filter(o => o !== obj);
        this.available.push(obj);
    }
}

// Usage
const pool = new ObjectPool();
const obj1 = pool.acquire();
pool.release(obj1);
