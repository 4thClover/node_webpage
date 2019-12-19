// First import all packages
const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');

// Second calling the app function
// making use of my env and port(s)
const app = express();
const port = process.env.PORT || 3000;

// serve static files from our public or our node modules
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'node-modules/bootstrap/dist/css')),);
app.use('/js', express.static(path.join(__dirname, 'node-modules/bootstrap/dist/js')),);
app.use('/js', express.static(path.join(__dirname, 'node-modules/jquery/dist')),);

// templating using appset.
app.set('views', './src/views');
app.set('view engine', 'ejs');

// using morgan
app.use(morgan('tiny'));

// Third making use of the get function
app.get('/', (req, res) => {
  res.render('index', { list: ['a', 'b'], title:'Mayan Power!!!'});
});

// Fourth using the listen function as a webserver using express
app.listen(port, () => {
  console.log(`Listening at port ${chalk.bold.green(port)}`);
});
