const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
    editing:false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null,title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};

exports.getEditProduct = (req, res, next) => {
    const editing =  req.query.edit;
    if (!editing) {
      res.redirect('/')
    }
  const productId=  req.params.productId;
  
  Product.findById(productId,product =>{
    res.render('admin/edit-product', {
      pageTitle: 'edit Product',
      path: '/admin/edit-product',
      editing:editing,
      product:product

    });
  })
  
};

exports.postEditProduct = (req, res, next) => {

  const id = req.body.id;
  
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
   const product = new Product(id,title, imageUrl, description, price);
   product.save();
  res.redirect('/admin/products');
};

exports.postDeleteProduct = (req, res, next) => {
  const id = req.body.id;
  Product.DeleteById(id,(products)=>{
    res.redirect('/admin/products');
  });
 
};
exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};
