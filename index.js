require('dotenv').config();
const express = require('express');
const router = require('./app/router');
const session = require('express-session');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');
app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));

// session

app.use(router);

const PORT = process.env.PORT || 3200;

app.listen(PORT, () => console.log(`app on http://localhost:${PORT}`));