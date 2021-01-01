const { Quiz } = require('../models');

const mainController = {
    homePage: async (req, res) => {
        try {
            const quizzes = await Quiz.findAll({
                include: 'author'
            });
            res.render('home', {quizzes});

        } catch(error) {
            console.trace(error);
        }
    }
};

module.exports = mainController;