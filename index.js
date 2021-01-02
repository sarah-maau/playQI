require('dotenv').config();
const express = require('express');
const router = require('./app/router');
const session = require('express-session');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');
app.use(express.static('public'));
app.use(express.static('public/images'));

app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: 'guess it!',
    saveUninitialized: true,
    resave: true,
}));
  
app.use((req, res, next) => {
    if (req.session.user) {
        res.locals.user = req.session.user;
    }
    next();
});

app.use(router);

const PORT = process.env.PORT || 3200;

app.listen(PORT, () => console.log(`app on http://localhost:${PORT}`));