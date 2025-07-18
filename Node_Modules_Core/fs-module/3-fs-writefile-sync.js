const fs = require('fs');

try {
  fs.writeFileSync('output.txt', 'Hello sync world!');
  console.log('File written successfully');
} catch (err) {
  console.error('Write error:', err);
}