const { Router } = require('express');

const router = new Router();

router.post('/notes', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).end('{ "status": "success" }');
});

router.put('/notes/:id', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).end('{ "status": "success" }');
});

router.delete('/notes/:id', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).end('{ "status": "success" }');
});

module.exports = router;