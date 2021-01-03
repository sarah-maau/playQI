const { Quiz, Tag } = require('../models');

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
    },
    quizAdminPage: async (req, res, next) => {
        try {
          const tags = await Tag.findAll();
          const quiz = await Quiz.findByPk(req.params.id, {
            include: 'tags'
          });
    
          if (quiz) {
            res.render('updateQuizAdmin', {quiz, tags});
          }
          else {
            next();
          }
        } catch (error) {
          console.trace(error);
          res.status(500).send(error);
        }
      },
      updateQuiz: async (req, res, next) => {
        try {
          const quiz = await Quiz.findByPk(req.params.id);
          const tags = await Tag.findAll({
            where: {
              // ici je passe directement le tableau que me renvoie Object.keys
              // de l'objet qu'on reçoit de req.body
              name: Object.keys(req.body)
            }
          });
    
          // ici j'utilise le setter qui va me permettre de changer à la fois, l'association entre
          // le quiz et ses tags et les quiz associés au tag
          // http://sequelize.org/master/manual/assocs.html#-code-foo-belongstomany-bar----through--baz-----code-
          quiz.setTags(tags);
    
          await quiz.save();
          res.redirect(`/admin/quiz/${quiz.id}`);
        } catch (error) {
          console.trace(error);
          res.status(500).send(error);
        }
      }
}

module.exports = quizController;