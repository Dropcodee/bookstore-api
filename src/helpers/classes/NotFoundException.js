import CustomError from './CustomError.js';

export default class NotFoundException extends CustomError {
  constructor(message) {
    super();
    this.statusCode = 404;
    this.message = message;
    this.stack = this;
  }
}
