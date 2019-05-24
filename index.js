const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const { PORT, MONGODB_URL } = require('./config');

const app = express();

app.set('views', './src/templates');
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'/public')));








app.listen(PORT, err => err ? console.error(err) : console.log(`We are on http://localhost:${PORT}`));

