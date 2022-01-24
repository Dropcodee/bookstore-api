import CustomError from './CustomError.js';

export default class BadRequestException extends CustomError {
  constructor(message) {
    super();
    this.statusCode = 400;
    this.message = message;
  }
}
