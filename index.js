const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const { PORT, MONGODB_URL } = require('./config');

const app = express();










app.listen(PORT, err => err ? console.error(err) : console.log(`We are on http://localhost:${PORT}`));

