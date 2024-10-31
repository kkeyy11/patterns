// nullObject.js
class Logger {
    log(message) {
        console.log(`Log: ${message}`);
    }
}

class NullLogger {
    log(message) {
        // Do nothing
    }
}

// Usage
const logger = new NullLogger(); // or new Logger();
logger.log("This will not be logged.");
