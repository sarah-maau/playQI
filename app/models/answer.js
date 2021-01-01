const { DataTypes, Model } = require ('sequelize');
const connexion = require('../database');

class Answer extends Model {};

Answer.init({
    description: {
        type: DataTypes.TEXT
    }
},{
    sequelize: connexion, 
    tableName: 'answer'
});

module.exports = Answer;