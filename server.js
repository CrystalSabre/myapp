const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Data storage
let books = [];

app.use(bodyParser.json());

// API endpoint to add a book
app.post('/books', (req, res) => {
    const newBook = req.body;
    books.push(newBook);
    res.json({ status: 'success', message: 'Book added successfully!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/books', (req, res) => {
    res.json(books);
});
