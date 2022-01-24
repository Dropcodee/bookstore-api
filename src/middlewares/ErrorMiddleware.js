const ErrorMiddleware = (err, req, res, next) => {
  res.header('Content-Type', 'application/json');
  let code = err.statusCode || 500
  res.status(code).send(JSON.stringify(err, null, 5)); // pretty print
};

export default ErrorMiddleware;
