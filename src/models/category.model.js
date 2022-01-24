import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'add a category string.'],
    },
    initials: { type: String, required: [true, 'please add a category initials'] },
    description: {
      type: String,
    },
    books: [{type: mongoose.Schema.ObjectId, ref: 'Book'}]
  },
  { timestamps: true }
);

const CategoryModel = mongoose.model('Category', CategorySchema);

export default CategoryModel;
