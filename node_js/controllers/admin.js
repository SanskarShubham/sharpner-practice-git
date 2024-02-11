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
  product.save()
  .then(()=>res.redirect('/'))
  .catch(err=>console.log(err));
 
};

exports.getEditProduct = (req, res, next) => {
    const editing =  req.query.edit;
    if (!editing) {
      res.redirect('/')
    }
  const productId=  req.params.productId;
      // console.log(productId, editing);
  Product.findById(productId).then(product =>{
  
    res.render('admin/edit-product', {
      pageTitle: 'edit Product',
      path: '/admin/edit-product',
      editing:editing,
      product:product[0]

    });
  })
  .catch(err=>console.log(err));
  
};

exports.postEditProduct = (req, res, next) => {

  const id = req.body.id;
  
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
   const product = new Product(id,title, imageUrl, description, price);
   product.save()
   .then(()=>res.redirect('/admin/products'))
   .catch();
  
};

exports.postDeleteProduct = (req, res, next) => {
  const id = req.body.id;
  Product.DeleteById(id).then(()=>res.redirect('/admin/products'))
};
exports.getProducts = (req, res, next) => {
  Product.fetchAll().then(products => {
    res.render('admin/products', {
      prods: products[0],
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  }).catch()
};
