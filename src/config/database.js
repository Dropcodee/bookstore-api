import logger from './logger.js';
import mongoose from 'mongoose';

function connectDB() {
  let dbUri = '';
  if (process.env.NODE_ENV === 'development') {
    dbUri = process.env.DEV_DB_URI;
  } else {
    dbUri = process.env.PROD_DB_URI;
  }

  return mongoose
    .connect(dbUri)
    .then(() => {
      logger.info('🔥🔥 Database connected 👌🏾👌🏾');
    })
    .catch((error) => {
      logger.error('🔺❌🚫 db error: 🚫🚫', error);
      logger.info(dbUri);
      process.exit(1);
    });
}

export default connectDB;
