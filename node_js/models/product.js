const db = require('../util/databse');

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute('INSERT INTO `products` (`title`, `price`, `description`, `imageUrl`) VALUES (?, ?, ?, ?)',
      [this.title, this.price, this.description, this.imageUrl]);

  }

  static fetchAll() {

    return db.execute('SELECT * FROM products');

  }

  static DeleteById(id) {
    return db.execute('DELETE FROM products WHERE id = ?', [id]);
  }
  static findById(id) {
    return db.execute('SELECT * FROM products where id = ?', [id]);
  }
};
