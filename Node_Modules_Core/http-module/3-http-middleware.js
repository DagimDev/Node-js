const http = require('http');

const server = http.createServer((req, res) => {
  // Middleware
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  
  // Route handler
  res.end('Check console for request log');
});

server.listen(3000);