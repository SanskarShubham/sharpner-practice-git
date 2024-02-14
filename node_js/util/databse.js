const Sequelize = require('sequelize');

const sequelize =  new Sequelize('shoping-site','root','123456',{dialect:'mysql', host:'localhost'})

module.exports = sequelize;