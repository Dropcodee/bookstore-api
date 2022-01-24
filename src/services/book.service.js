import BookModel from '../models/book.model.js';
import { updateCategoryBooksService } from './category.service.js';

export async function CreateBookService(book) {
  try {
    const createdBook = await BookModel.create(book);
    await updateCategoryBooksService(createdBook._id, createdBook.categoryId);
    return createdBook;
  } catch (error) {
    return error;
  }
}
export async function GetBooksByCategoryService(categoryId) {
  try {
    const books = await BookModel.find({ categoryId }).sort({ createdAt: -1 });
    const total = await BookModel.find({ categoryId }).countDocuments();
    return { books, total };
  } catch (error) {
    return error;
  }
}
export async function GetAllBooksService() {
  try {
    const books = await BookModel.find().sort({ createdAt: -1 });
    const total = await BookModel.find().countDocuments();
    return { books, total };
  } catch (error) {
    return error;
  }
}
