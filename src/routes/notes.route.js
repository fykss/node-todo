const { Router } = require('express');

const router = new Router();

router.get('/', function (req, res) {
    res.render('Notes/Notes');
});

router.get('/:id', function (req, res) {
    res.render('Notes/Notes');
});

module.exports = router;