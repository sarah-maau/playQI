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
                            'possible_answers',
                        ]
                    }
                ]
            });
            if (!quiz) {
                next();
            }
            if(!req.session.user) {
                res.render('quiz', {quiz});
            }
            else {
                res.render('play_quiz', {quiz});
            }
        } catch (error) {
            console.trace(error);
        }
    },

    playquizPage: async (req, res) => {
        try {
            const id = Number(req.params.id)
            const quiz = await Quiz.findByPk(id, {
                include: [
                    'author',
                    'tags',
                    {
                        association: 'questions',
                        include: [
                        'level',
                        'possible_answers',
                        'right_answer'
                        ]
                    }
                ]
            });
            const userAnswers = [];
            const errors = [];
            let score = 0;
            for (const value in req.body) {
                userAnswers.push(Number(req.body[value]))
                quiz.questions.forEach(question => {
                    if(Number (req.body[value]) === question.right_answer.id) {
                        score++;
                    }
                });
            }
            res.render('result', {quiz, userAnswers, score});
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = quizController;