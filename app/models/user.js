const { DataTypes, Model } = require ('sequelize');
const connexion = require('../database');

class User extends Model {
    getFullName(){
        return `${this.firstname} ${this.lastname}`;
    }
};

User.init({
    firstname: {
        type: DataTypes.TEXT
    }, 
    lastname: {
        type: DataTypes.TEXT
    },
    email: {
        type: DataTypes.TEXT
    },
    password: {
        type: DataTypes.TEXT
    }, 
    role: {
        type: DataTypes.TEXT, 
        defaultValue: 'user'
    }
},{
    sequelize: connexion, 
    tableName: 'user'
});

module.exports = User;