const fs = require('fs');
const path = require('path');

class Config {
  static load() {
    const configPath = path.join(__dirname, 'config.json');
    return JSON.parse(fs.readFileSync(configPath, 'utf8'));
  }
}

module.exports = Config;