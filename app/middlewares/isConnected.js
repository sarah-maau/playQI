const isConnected = (req, res, next) => {
    if (!req.session.user) {
        res.redirect('/login');
    }
    next();
}

module.exports = isConnected;