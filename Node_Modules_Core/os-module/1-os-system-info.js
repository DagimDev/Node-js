const os = require('os');

console.log('System Info:', {
  platform: os.platform(),
  arch: os.arch(),
  cpus: os.cpus().length,
  freeMem: `${(os.freemem() / 1024 / 1024).toFixed(2)} MB`,
  uptime: `${(os.uptime() / 60 / 60).toFixed(2)} hours`
});