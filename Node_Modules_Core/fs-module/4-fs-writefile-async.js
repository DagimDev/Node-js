const fs = require('fs');

fs.writeFile('output.txt', 'Hello async world!', (err) => {
  if (err) throw err;
  console.log('File saved async');
});