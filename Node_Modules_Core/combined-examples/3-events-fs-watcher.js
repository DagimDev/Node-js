const fs = require('fs');
const EventEmitter = require('events');

class FileWatcher extends EventEmitter {
  watch(file) {
    fs.watch(file, (eventType, filename) => {
      this.emit('change', { eventType, filename, time: new Date() });
    });
  }
}

const watcher = new FileWatcher();
watcher.on('change', (data) => {
  console.log('File changed:', data);
});

watcher.watch('example.txt');