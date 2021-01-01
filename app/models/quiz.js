const { DataTypes, Model } = require ('sequelize');
const connexion = require('../database');

class Quiz extends Model {};

Quiz.init({
    title: {
        type: DataTypes.TEXT
    }, 
    description: {
        type: DataTypes.TEXT
    },
    image: {
        type: DataTypes.TEXT
    }
},{
    sequelize: connexion, 
    tableName: 'quiz'
});

module.exports = Quiz;