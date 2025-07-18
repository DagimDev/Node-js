const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'logs');
const logFile = path.join(logsDir, 'app.log');

if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

fs.writeFileSync(logFile, `Log created at ${new Date().toISOString()}\n`);
console.log('Log saved to:', logFile);