require('dotenv').config();

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(
    {connectionString: process.env.DATABASE_URL}, {
    define: {
        timestamps: false
    }
});

module.exports = sequelize;