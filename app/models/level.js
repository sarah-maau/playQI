const { DataTypes, Model } = require ('sequelize');
const connexion = require('../database');

class Level extends Model {};

Level.init({
    name: {
        type: DataTypes.TEXT
    }
},{
    sequelize: connexion, 
    tableName: 'level'
});

module.exports = Level;