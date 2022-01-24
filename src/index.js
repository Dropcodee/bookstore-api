import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import logger from './config/logger.js';
import cors from 'cors';
import routes from './router/index.js';
import connectDB from './config/database.js';
import ErrorMiddleware from './middlewares/ErrorMiddleware.js';

dotenv.config();
const app = express();

// core setup
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const host = process.env.SERVER_HOST;
const port = parseInt(process.env.SERVER_PORT);
logger.info(port);
app.listen(port, host, async () => {
  // router setup
  routes(app);
  app.use(ErrorMiddleware);
  // db connection
  connectDB();
  logger.info(`🚀🚀🚀 Server listing at http://${host}:${port} 🔥🔥🔥`);
});
