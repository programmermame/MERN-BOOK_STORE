import Book from '../models/bookModel.js'

export const getBooks = async (req, res) => {
    try {
        const getBooks = await Book.find()
        res.send({ message: 'See all Books', getBooks });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export const getBook = async (req, res) => {
    try {
        const id = req.params.id;
        const getBook = await Book.findById(id);
        res.send(getBook);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const createBook = async (req, res) => {
    try {
        if (
            req.body.ISBN,
            req.body.Title &&
            req.body.Author &&
            req.body.Genre &&
            req.body.PublicationDate) {

            const newBook = {
                ISBN: req.body.ISBN,
                Title: req.body.Title,
                Author: req.body.Author,
                Genre: req.body.Genre,
                PublicationDate: req.body.PublicationDate,
            }

            const createBook = await Book.create(newBook);

            return res.status(200).send(createBook);
        }
        return res.status(400).json({ message: 'Send all required fields: ISBN,Title, Author, Genre, PublicationDate' });


    } catch (error) {
        res.status(500).json({ message: error.message })

    }

}
export const updateBook = async (req, res) => {
    try {
        const { ISBN, Title, Author, Genre, PublicationDate } = req.body;
        if (
            ISBN,
            Title &&
            Author &&
            Genre &&
            PublicationDate) {

            const id = req.params.id;

            const updateBook = await Book.findByIdAndUpdate(id, { ISBN, Title, Author, Genre, PublicationDate }, { new: true }, { runValidators: true });

            if (updateBook) {
                return res.status(200).json({ message: "Book updated successfully" })
            } else {
                return res.status(200).json({ message: "Book not found!" })
            }
        }
        return res.status(400).json({ message: 'Send all required fields: Title, Author, Genre, PublicationDate' });

    } catch (error) {
        res.status(500).json({ message: error.message })

    }

}
export const deleteBook = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteBook = await Book.findByIdAndDelete(id);
        res.send("Book deleted successfully!");

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}