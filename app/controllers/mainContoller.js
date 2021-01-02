const { Quiz, Tag } = require('../models');

const mainController = {
    homePage: async (req, res) => {
        try {
            const quizzes = await Quiz.findAll({
                include: 'author'
            });
            const tags = await Tag.findAll();
            res.render('home', {quizzes, tags});

        } catch(error) {
            console.trace(error);
        }
    }
};

module.exports = mainController;