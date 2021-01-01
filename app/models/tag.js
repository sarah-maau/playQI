const { DataTypes, Model } = require ('sequelize');
const connexion = require('../database');

class Tag extends Model {};

Tag.init({
    name: {
        type: DataTypes.TEXT
    }
},{
    sequelize: connexion, 
    tableName: 'tag'
});

module.exports = Tag;