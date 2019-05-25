const { Router } = require('express');

const router = new Router();

router.get('/', function (req, res) {
    res.render('Note/Note');
});

router.get('/:id', function (req, res) {
    res.render('Note/Note');
});

module.exports = router;