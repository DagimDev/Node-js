const path = require('path');

const parsed = path.parse(__filename);
console.log('File details:', {
  name: parsed.name,
  ext: parsed.ext,
  dir: parsed.dir
});