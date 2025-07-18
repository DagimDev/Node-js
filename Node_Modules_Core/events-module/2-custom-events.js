const EventEmitter = require('events');

class Logger extends EventEmitter {
  log(message) {
    console.log(message);
    this.emit('messageLogged', { id: 1, message });
  }
}

const logger = new Logger();
logger.on('messageLogged', (data) => {
  console.log('Listener called:', data);
});

logger.log('Hello events!');