const os = require('os');

const networks = os.networkInterfaces();
console.log('Network Interfaces:', Object.keys(networks));