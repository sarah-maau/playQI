const { DataTypes, Model } = require ('sequelize');
const connexion = require('../database');

class Tag extends Model {
    getLabel (){
        return `${this.name.toLowerCase()}`
    }
};

Tag.init({
    name: {
        type: DataTypes.TEXT
    }
},{
    sequelize: connexion, 
    tableName: 'tag'
});

module.exports = Tag;