const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainContoller');
router.get('/', mainController.homePage);

// middleware de rendu de la page 404
router.use((req, res) => {
    res.render('404');
})


module.exports = router;