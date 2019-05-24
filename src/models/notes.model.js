const mongoose = require('mongoose');

const Note = mongoose.model('Note', new Schema({
    title: String,
    description: String,
}));

module.exports = Note;