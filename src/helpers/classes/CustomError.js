export default class CustomError extends Error {
  constructor(message, httpCode) {
    super();
    this.name = this.constructor.name;
    this.stack = Error.captureStackTrace(this) || null;
    this.message = message;
    this.statusCode = httpCode;
  }
}
