const fs = require('fs');

// Create directory
if (!fs.existsSync('logs')) {
  fs.mkdirSync('logs');
  console.log('Directory created');
}

// List files
fs.readdir('.', (err, files) => {
  if (err) throw err;
  console.log('Current directory files:', files);
});