import logger from '../config/logger.js';

const ValidateRequest = (schemaShape) => async (req, res, next) => {
  try {
    await schemaShape.validateAsync(req.body);
    next();
  } catch (err) {
    logger.error(err);
    res.status(422).json({ errors: err.message });
  }
};

export default ValidateRequest;
