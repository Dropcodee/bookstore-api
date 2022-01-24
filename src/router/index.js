import bookRouter from './book.router.js';
import categoryRouter from './category.router.js';
import defaultRouter from './default.router.js';

export default function routes(app) {
  app.use('/', defaultRouter);
  app.use('/apis/books', bookRouter);
  app.use('/apis/categories', categoryRouter);
}
