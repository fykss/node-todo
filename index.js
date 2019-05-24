const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// ROUTES
const indexRouter = require('./src/routes/index.route');
const notesRouter = require('./src/routes/notes.route');
const apiNotesRouter = require('./src/routes/api/notes.route');

const { PORT, MONGODB_URL } = require('./config');

const app = express();

app.set('views', './src/templates/views');
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'/public')));

app.use(indexRouter);
app.use('/notes', notesRouter);
app.use('/api', apiNotesRouter);





app.listen(PORT, err => err ? console.error(err) : console.log(`We are on http://localhost:${PORT}`));

