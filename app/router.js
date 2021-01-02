const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainContoller');
const quizController = require('./controllers/quizController');
const tagController = require('./controllers/tagController');
const authController = require('./controllers/authController')

router.get('/', mainController.homePage);
router.get('/quiz/:id', quizController.quizPage);
router.get('/tags', tagController.tagsPage);
router.get('/tag/:id', tagController.tagPage);

// gestion de l'inscription
router.get('/signup', authController.signupPage);
router.post('/signup', authController.submitSignupForm);

// gestion de la connexion
router.get('/login', authController.loginPage);
router.post('/login', authController.submitLoginForm);

// middleware de rendu de la page 404
router.use((req, res) => {
    res.render('404');
})


module.exports = router;