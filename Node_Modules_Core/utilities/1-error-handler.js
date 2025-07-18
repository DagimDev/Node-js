class ErrorHandler {
  static handle(err) {
    console.error('ERROR:', {
      message: err.message,
      stack: err.stack,
      timestamp: new Date()
    });
  }
}

module.exports = ErrorHandler;