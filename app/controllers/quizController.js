const { Quiz } = require('../models');

const quizController = {
    quizPage: async (req, res, next) => {
        try {
            const id = Number(req.params.id);
            const quiz = await Quiz.findByPk(id, {
                include: [
                    'author',
                    'tags',
                    {
                        association: 'questions', 
                        include: [
                            'level', 
                            'possible_answers'
                        ]
                    }
                ]
            });
            if (!quiz) {
                next();
            }
            else {
                res.render('quiz', {quiz});
            }
        } catch (error) {
            console.trace(error);
        }
    }

}

module.exports = quizController;