const Sequelize = require('sequelize');
const sequelize = require('../util/databse');

const Product = sequelize.define('product',{
    id:{
      type: Sequelize.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true
    },
    title: Sequelize.STRING,
    price:{
      type: Sequelize.DOUBLE,
      allowNull:false
    },
    description:{
      type: Sequelize.STRING,
    },
    imageUrl:{
      type: Sequelize.STRING,
      allowNull:false
    }
  })

  module.exports = Product;














































// module.exports = class Product {
//   constructor(id, title, imageUrl, description, price) {
//     this.id = id;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//   }

//   save() {
//     return db.execute('INSERT INTO `products` (`title`, `price`, `description`, `imageUrl`) VALUES (?, ?, ?, ?)',
//       [this.title, this.price, this.description, this.imageUrl]);

//   }

//   static fetchAll() {

//     return db.execute('SELECT * FROM products');

//   }

//   static DeleteById(id) {
//     return db.execute('DELETE FROM products WHERE id = ?', [id]);
//   }
//   static findById(id) {
//     return db.execute('SELECT * FROM products where id = ?', [id]);
//   }
// };
