class BaseResponse {
  constructor(message, statusCode, data = null) {
    this.message = message;
    this.statusCode = statusCode;
    this.data = data;
  }
}

module.exports = BaseResponse;
