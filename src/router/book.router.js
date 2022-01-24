import express from 'express';
import ValidateRequest from '../middlewares/ValidateRequestMiddleware.js';
import {
  CreateBooksHandler,
  DeleteBooksHandler,
  FetchCategoryBooksHandler,
  FetchAllBooksHandler
} from '../handlers/book.handler.js';
import { CreateBookSchema } from '../schema/book.schema.js';

const bookRouter = express.Router();

bookRouter.post('/', ValidateRequest(CreateBookSchema), CreateBooksHandler);
bookRouter.get('/', FetchAllBooksHandler)
bookRouter.get('/category/:categoryId', FetchCategoryBooksHandler)
bookRouter.delete('/:bookId', DeleteBooksHandler);

export default bookRouter;
