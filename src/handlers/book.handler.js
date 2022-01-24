import { ResponseHelper } from '../helpers/response.helper.js';
import {
  CreateBookService,
  GetBooksByCategoryService,
  GetAllBooksService,
} from '../services/book.service.js';
import NotFoundException from '../helpers/classes/NotFoundException.js';
import BadRequestException from '../helpers/classes/BadRequestException.js';

export async function CreateBooksHandler(req, res) {
  try {
    const book = await CreateBookService(req.body);
    if (!book) {
      throw new BadRequestException(
        'unable to process book request, please check your request...'
      );
    }
    ResponseHelper(book, 1, 'Successfully created your book.', 201, res);
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function FetchCategoryBooksHandler(req, res, next) {
  try {
    const { categoryId } = req.params;
    const resData = await GetBooksByCategoryService(categoryId);
    if (!resData.books) {
      throw new NotFoundException('category id does not exist, try again...');
    }
    return ResponseHelper(
      resData.books,
      resData.total,
      'Successfully retrieved all books.',
      200,
      res
    );
  } catch (error) {
    next(error);
  }
}

export async function FetchAllBooksHandler(req, res) {
  try {
    const booksRes = await GetAllBooksService();
    return ResponseHelper(
      booksRes.books,
      booksRes.total,
      'Successfully retrieved all books.',
      200,
      res
    );
  } catch (error) {
    throw new Error(error.message);
  }
}
export function DeleteBooksHandler(req, res) {}
