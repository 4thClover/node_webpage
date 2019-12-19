// First import all packages
const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');

// Second calling the app function
const app = express();

// serve static files from our public or our node modules
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  '/css',
  express.static(path.join(__dirname, 'node-modules/bootstrap/dist/css')),
);
app.use(
  '/js',
  express.static(path.join(__dirname, 'node-modules/bootstrap/dist/js')),
);
app.use(
  '/js',
  express.static(path.join(__dirname, 'node-modules/jquery/dist')),
);

// using morgan
app.use(morgan('tiny'));

// Third making use of the get function
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Fourth using the listen function as a webserver using express
app.listen(3000, () => {
  console.log(`Listening on port ${chalk.bold.green('3000')}`);
});
