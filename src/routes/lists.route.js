const { Router } = require('express');
const router = new Router();

//Роут GET `/lists`, который будет отдавать HTML страницу с формой создания списка.
router.get('/', function (req, res) {

});

// Роут GET `/lists/${id}`, который будет отдавать HTML страницу детального отображения списка.
router.get('/:id', function (req,res) {

});

module.exports = router;