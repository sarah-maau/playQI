const { DataTypes, Model } = require ('sequelize');
const connexion = require('../database');

class Question extends Model {};

Question.init({
    question: {
        type: DataTypes.TEXT
    }, 
    wiki: {
        type: DataTypes.TEXT
    }
},{
    sequelize: connexion, 
    tableName: 'question'
});

module.exports = Question;