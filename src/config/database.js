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
      logger.info('π₯π₯ Database connected ππΎππΎ');
    })
    .catch((error) => {
      logger.error('πΊβπ« db error: π«π«', error);
      logger.info(dbUri);
      process.exit(1);
    });
}

export default connectDB;
