const Book = require('../models/book');



module.exports.getBooks = async () => {
	const books = await Book.find({})
	return books;
}

// Get Book
module.exports.getBookById = async (id) => {
	const book = await Book.findById(id)
	return book;
}

// Add Book
module.exports.addBook = async (book) => {
	const _book = new Book(book)
	await _book.save()
	return _book
}

// Update Book
module.exports.updateBook = async (id, book) => {
	const _book = await Book.findByIdAndUpdate(id, book, { new: true, runValidators: true })
	return _book
}

// Delete Book
module.exports.removeBook = async (id) => {
	const book = await Book.findByIdAndDelete(id)
	return book;
}
