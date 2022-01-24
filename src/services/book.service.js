import BookModel from '../models/book.model.js';

export function CreateBookService(book) {
  return BookModel.create(book);
}
export async function GetBooksByCategoryService(categoryId) {
  try {
    const books =  await BookModel.find({ categoryId }).sort({ createdAt: -1 });
    const total =  await BookModel.find({ categoryId }).countDocuments();
    return { books, total };
  } catch (error) {
    return error;
  }
}
export async function GetAllBooksService() {
  const books = await BookModel.find().sort({ createdAt: -1 });
  const total = await BookModel.find().countDocuments();
  return { books, total };
}
