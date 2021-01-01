const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainContoller');
router.get('/', mainController.homePage);


module.exports = router;