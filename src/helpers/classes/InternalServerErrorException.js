import CustomError from './CustomError.js';

export default class InternalServerErrorException extends CustomError {
  constructor(message) {
    super();
    this.statusCode = 500;
    this.message = message;
  }
}
