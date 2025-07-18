const http = require('http');
const os = require('os');

http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      status: 'OK',
      memory: `${(os.freemem() / 1024 / 1024).toFixed(2)} MB free`,
      uptime: `${(os.uptime() / 60 / 60).toFixed(2)} hours`
    }));
  } else {
    res.end('Try /health endpoint');
  }
}).listen(3000);