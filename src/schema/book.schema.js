import Joi from 'joi';

const name = Joi.string().required().messages({
  'string.base': 'name should be of type text/string',
  'any.required': 'please enter a name for this book',
  'string.empty': 'name cannot be empty',
});

const description = Joi.string().required().messages({
  'string.base': 'description should be of type text/string',
  'any.required': 'add a description for this book',
  'string.empty': 'description cannot be empty',
});

const author = Joi.string().required().messages({
  'string.base': 'author should be of type text/string',
  'any.required': 'please enter the author for this book',
  'string.empty': 'author cannot be empty',
});
const isbnNumber = Joi.string().required().messages({
  'string.base': 'ISBN Number should be of type text/string',
  'any.required': 'please enter the ISBN Number for this book',
  'string.empty': 'ISBN Number cannot be empty',
});
const publishedDate = Joi.date().required().messages({
  'string.base': 'Published date should be of type ISO string date',
  'any.required': 'please enter the Published date for this book',
  'string.empty': 'Published date cannot be empty',
});
const publisher = Joi.string().required().messages({
  'string.base': 'publisher should be of type text/string',
  'any.required': 'please enter the publisher for this book',
  'string.empty': 'publisher cannot be empty',
});
const categoryId = Joi.string().required().messages({
  'string.base': 'category id should be of type text/string',
  'any.required': 'please enter the category id for this book',
  'string.empty': 'category id cannot be empty',
});

const CreateBookSchema = Joi.object({
  name,
  description,
  author,
  publisher,
  publishedDate,
  isbnNumber,
  categoryId,
});

export { CreateBookSchema };
