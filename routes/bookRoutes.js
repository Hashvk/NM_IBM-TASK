const express = require("express");
const router = express.Router();

let books = [
    { id: 1, name: "The Hobbit", author: "J.R.R Tolkien", language: "English"},
    { id: 2, name: "Harry Potter", author: "J.K Rowling", language: "English"}
];

//READ
router.get('/',(req,res) => {
    res.json(books);

});

//UPDATE
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedName = req.body.name;

    books = books.map(book => 
        book.id === id ? { ...book, name: updatedName } : book
    );

    res.json({
        message: "books updated successfully",
        books // Sending back the updated list
    }); 
});

//CREATE
router.post('/', (req, res) => {
    const newBook = req.body;
    bookss.push(newBook);

    res.status(201).json({
        message: "Book added successfully",
        books
    });
});
module.exports = router;

//DELETE
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    books = books.filter(book => book.id !== id);

    res.json({
        message: "Book deleted successfully",
        books
    });
});