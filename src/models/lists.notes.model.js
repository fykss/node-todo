const mongoose = require('mongoose');

const ListNote = mongoose.model('ListNote', new mongoose.Schema({
    title: {default:'', type: String},
    description: {required: true, type: String},
    done: {default: false, type: Boolean }
}));

module.exports = ListNote;