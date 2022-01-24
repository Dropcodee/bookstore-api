import express from 'express';
import {
  CreateCategoryHandler,
  FetchCategoriesHandler,
} from '../handlers/category.handler.js';
import ValidateRequest from '../middlewares/ValidateRequestMiddleware.js';
import { CreateCategorySchema } from '../schema/category.schema.js';

const categoryRouter = express.Router();

categoryRouter.post(
  '/',
  ValidateRequest(CreateCategorySchema),
  CreateCategoryHandler
);

categoryRouter.get('/', FetchCategoriesHandler);

export default categoryRouter;
