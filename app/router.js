const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainContoller');
const quizController = require('./controllers/quizController');
const tagController = require('./controllers/tagController');

router.get('/', mainController.homePage);
router.get('/quiz/:id', quizController.quizPage);
router.get('/tags', tagController.tagsPage);
router.get('/tag/:id', tagController.tagPage);

// middleware de rendu de la page 404
router.use((req, res) => {
    res.render('404');
})


module.exports = router;