const fs = require('fs');
const path = require('path');

class Logger {
  static log(message) {
    const logPath = path.join(__dirname, 'app.log');
    fs.appendFileSync(logPath, `${new Date().toISOString()} - ${message}\n`);
  }
}

module.exports = Logger;