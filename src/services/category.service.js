import CategoryModel from '../models/category.model.js';

export function CreateCategoryService(category) {
  category.initials = category.name
  .charAt(0)
  .toUpperCase() + category.name.charAt(1).toUpperCase()
  return CategoryModel.create({
    name: category.name,
    initials: category.initials,
    description: category.description | null,
  });
}

export async function GetAllCategoryService() {
  const categories = await CategoryModel.find().sort({ createdAt: -1 });
  const total = await CategoryModel.find().countDocuments();
  return { categories, total };
}
