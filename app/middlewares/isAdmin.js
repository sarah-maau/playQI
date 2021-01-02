const isAdmin = (req, res, next) => {
    if (req.session.user.role !== 'admin') {
        res.status(403).render('403');
    }
    next();
}

module.exports = isAdmin;