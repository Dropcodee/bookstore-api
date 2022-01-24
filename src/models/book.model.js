import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'please add a book name'] },
    description: {
      type: String,
      required: [true, 'please add book description.'],
    },
    author: { type: String, required: [true, "please add author's name"] },
    isbnNumber: {
      type: String,
      required: [true, 'add registered by isbn number.'],
    },
    publishedDate: {
      type: Date,
      required: [true, 'please add a correct book published date'],
    },
    publisher: { type: String, required: [true, "add the publisher's name"] },
    categoryId: { type: mongoose.Schema.ObjectId, ref: 'Category' },
    imageUrl: {
      type: String,
      default:
        'https://us.123rf.com/450wm/orson/orson1412/orson141200001/34186948-modern-vector-abstract-book-cover-template-with-teared-paper.jpg?ver=6',
    },
  },
  { timestamps: true }
);

const BookModel = mongoose.model('Book', BookSchema);

export default BookModel;
