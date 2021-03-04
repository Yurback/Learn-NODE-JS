const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Elbrus2021', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
