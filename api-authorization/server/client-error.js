class ClientError { // This will also be called later
  constructor(status, message) {
    this.status = status;
    this.message = message;
  }
}

module.exports = ClientError;
