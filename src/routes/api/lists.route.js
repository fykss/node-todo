const { Router } = require('express');
const mongoose = require('mongoose');
const router = new Router();

const ListNote = mongoose.models.ListNote;

//Роут GET `/api/lists/${id}` отображения заметки со списком.
router.get('/lists/:id', function(req, res) {
    listNote.find({}, function(err, data) {
        if (err) {
            return res.status(400).end('{ "status" : "failed" }');
        }
        res.render('Index/Index', { data });
    });
});

// Роут POST `/api/lists` для добавления нового списка задач с учетом того, что количество позиций в списке - не ограничено и заранее не известно.
router.post('/lists', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    const listNote = new ListNote({
        title: req.body.title,
        description: req.body.description
    });
    listNote.save(function(err, data) {
        if (err) {
            return res.status(400).end('{ "status" : "failed" }');
        }
        console.log(data);
        res.status(200).end(
            '{ "status" : "success", "id": "' + data._id + '"}'
        );
    });
});

// Роут PUT `/api/lists/${id}` для редактирования списка задач..
router.put('/lists/:id', function(req, res) {
    res.setHeader('Content-Type', 'application/json');

    const result = {};

    if (req.body.title) result.title = req.body.title;
    if (req.body.description) result.description = req.body.description;
    if (req.body.done) result.done = req.body.done;

    ListNote.updateOne(
        { _id: req.params.id },
        {
            title: req.body.title,
            description: req.body.description,
            done: req.body.done
        },
        function(err, data) {
            if (err) {
                console.log(err);
                return res.status(400).end('{ "status" : "failed" }');
            }
            res.status(200).end('{ "status" : "success" }');
        }
    );
});

//Роут DELETE `/api/lists/${id}` для удаления заметки со списком.
router.delete('/lists/:id', function(req, res) {
    ListNote.deleteOne({ _id: req.params.id }, function(err) {
        if (err) {
            return res.status(400).end('{ "status" : "failed" }');
        }
        res.status(200).end('{ "status" : "success" }');
    });
});

module.exports = router;
