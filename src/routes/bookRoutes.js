const express = require('express');

const bookRouter = express.Router();

const books = [
  {
    title: 'War and Peace',
    genre: 'Star Wars',
    author: 'Ryan Dollart',
    read: false
  },
  {
    title: 'Thelma and Louise',
    genre: 'Marvel',
    author: 'Aartie Bachoe',
    read: false
  },
  {
    title: 'Flowchart',
    genre: 'Disney',
    author: 'Akhiel Poeran',
    read: false
  }
];

// Now setup a series of Routes.
bookRouter.route('/')
  .get((req, res) => {
    res.render(
      'books',
      {
        nav: [{ link: '/books', title: 'Books' }, { link: '/authors', title: 'Authors' }],
        title: 'Mayan Power!',
        books
      }
    );
  });

bookRouter.route('/:id')
  .get((req, res) => {
    const { id } = req.params;
    res.render(
    'book',
    {
    nav: [{ link: '/books', title: 'Books' }, { link: '/authors', title: 'Authors' }],
    title: 'Mayan Power!',
    book: books[id]
    }
    );
  });

module.exports = bookRouter;
