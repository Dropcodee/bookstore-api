import Joi from 'joi';

const name = Joi.string().required().messages({
  'string.base': 'name should contain strings only',
  'any.required': 'please enter a name for this category',
  'string.empty': 'name cannot be empty',
});

const description = Joi.string().messages({
  'string.base': 'description should contain strings only',
});

const CreateCategorySchema = Joi.object({
  name,
  description,
});

export { CreateCategorySchema };
