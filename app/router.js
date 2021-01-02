const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainContoller');
const quizController = require('./controllers/quizController');
const tagController = require('./controllers/tagController');
const authController = require('./controllers/authController');
const userController = require('./controllers/userController')
const adminController = require('./controllers/adminController');

const isConnected = require('./middlewares/isConnected');
const isAdmin = require('./middlewares/isAdmin');

router.get('/', mainController.homePage);
router.get('/quiz/:id', quizController.quizPage);
router.post('/quiz/:id', quizController.playquizPage);
router.get('/tags', tagController.tagsPage);
router.get('/tag/:id', tagController.tagPage);

// gestion de l'inscription
router.get('/signup', authController.signupPage);
router.post('/signup', authController.submitSignupForm);

// gestion de la connexion
router.get('/login', authController.loginPage);
router.post('/login', authController.submitLoginForm);
router.get('/profile', isConnected, userController.profilePage);
router.get('/logout', authController.logout);

router.get('/admin', isConnected, isAdmin, adminController.adminPage);



// middleware de rendu de la page 404
router.use((req, res) => {
    res.render('404');
})


module.exports = router;