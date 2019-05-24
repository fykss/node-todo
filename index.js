const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//ROUTES
const indexRouter = require('./src/routes/index.route');
const listsRouter = require('./src/routes/lists.route');
const apiRouter = require('./src/routes/api/lists.route');

const { PORT, MONGODB_URL } = require('./config');

const app = express();

app.set('views', './src/templates/views');
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'/public')));
app.use(indexRouter);
app.use('/lists', listsRouter);
app.use('/api', apiRouter);

mongoose.connect( MONGODB_URL , { useNewUrlParser: true });
mongoose.connection.on('error' , console.error.bind(console, 'db connection err'));
mongoose.connection.once('open', function callback(){
    app.listen(PORT, err => err ? console.error(err) : console.log(`We are on http://localhost:${PORT}`));
});