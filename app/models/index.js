// require tous les models
const Answer = require('./answer');
const Level = require('./level');
const Question = require('./question');
const Quiz = require('./quiz');
const Tag = require('./tag');
const User = require('./user');

/** DÉFINITION DES ASSOCIATIONS */

// relations 1:N
Quiz.hasMany(Question, {
    foreignKey: 'quiz_id',
    as: 'questions'
});

Question.belongsTo(Quiz, {
    foreignKey: 'quiz_id',
    as: 'quiz'
});

Question.hasMany(Answer, {
    foreignKey: 'question_id',
    as: 'possible_answers'
});

Answer.belongsTo(Question, {
    foreignKey: 'question_id',
    as: 'question'
});

Level.hasMany(Question, {
    foreignKey: 'level_id',
    as: 'questions'
});

Question.belongsTo(Level, {
    foreignKey: 'level_id',
    as: 'level'
});

User.hasMany(Quiz, {
    foreignKey: 'user_id',
    as: 'quizzes'
});

Quiz.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'author'
});

// relation 1:1
Question.belongsTo(Answer, {
    foreignKey: 'answer_id',
    as: 'right_answer'
});

// relation N:N
Quiz.belongsToMany(Tag, {
    foreignKey: 'quiz_id',
    otherKey: 'tag_id',
    through: 'quiz_has_tag',
    as: 'tags'
});

Tag.belongsToMany(Quiz, {
    foreignKey: 'tag_id',
    otherKey: 'quiz_id',
    through: 'quiz_has_tag',
    as: 'quizzes'
});

// export des modèles associés
module.exports = {
    Answer, 
    Level,
    Question,
    Quiz,
    Tag, 
    User
};