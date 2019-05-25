const { Router } = require('express');
const mongoose = require('mongoose');

const router = new Router();
const ListNote = mongoose.models.ListNote;

router.get('/', async function (req, res) {
    res.render("Index/Index", {notes: await ListNote.find()});
});

module.exports = router;