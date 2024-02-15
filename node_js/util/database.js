
const {Sequelize} = require('sequelize');

const sequelize =  new Sequelize('shoping-site','root','123456',{dialect:'mysql', host:'localhost'})
// logging: true,
module.exports = sequelize;
