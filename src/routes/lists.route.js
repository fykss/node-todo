const { Router } = require('express');
const mongoose = require('mongoose');

const router = new Router();
const ListNote = mongoose.models.ListNote;

// Роут GET `/lists/${id}`, который будет отдавать HTML страницу детального отображения списка.
router.get('/:id', async function (req,res) {
    if(req.params.id){
        res.json({data: await ListNote.findOne({ _id: req.params.id })})
    }else {
        res.status(400).end('Error: Argument ID is required')
    }
});

module.exports = router;