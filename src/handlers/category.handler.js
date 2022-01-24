import { ResponseHelper } from '../helpers/response.helper.js';
import {
  CreateCategoryService,
  GetAllCategoryService,
} from '../services/category.service.js';

export async function CreateCategoryHandler(req, res) {
  try {
    let category = await CreateCategoryService(req.body);
    !category &&
      res
        .status(409)
        .json({ message: 'error creating category, please try again' });
    return ResponseHelper(
      category,
      1,
      'Successfully created category',
      201,
      res
    );
  } catch (error) {
    throw new Error(error);
  }
}

export async function FetchCategoriesHandler(req, res) {
  try {
    const resData = await GetAllCategoryService();
    return ResponseHelper(
      resData.categories,
      resData.total,
      'Successfully created category',
      200,
      res
    );
  } catch (error) {
    throw new Error(error);
  }
}
