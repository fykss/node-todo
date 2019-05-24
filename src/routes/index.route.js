const { Router } = require('express');
const router = new Router();

router.get('/', function (req, res) {
    res.render("Index/Index");
});

module.exports = router;