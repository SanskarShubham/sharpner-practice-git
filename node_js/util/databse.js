const Sequelize = require('sequelize');

const sequilize =  new Sequelize('shoping-site','root','123456',{dialect:'mysql', host:'localhost'})

module.exports = sequilize;