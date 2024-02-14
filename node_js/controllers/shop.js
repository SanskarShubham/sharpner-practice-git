const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.findAll().then(products=>{
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  }).catch(err=> console.log(err));
};
exports.getProduct =  (req, res, next) => {
  const productId = req.params.productId;
  Product.findByPk(productId).then(product=>{
    res.render('shop/product-detail', {
      product: product,
      pageTitle: product.title,
      path: '/products'
    });
  }).catch(err=> console.log(err));
 
}
exports.getIndex = (req, res, next) => {
  Product.findAll().then(product=>{
    res.render('shop/index', {
      prods: product,
      pageTitle: 'Shop',
      path: '/'
    });
  }).catch(err=> console.log(err));
  
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};
exports.postCart = (req, res, next) => {
      const productId = req.body.productId; 
      Product.findByPk(productId).then(prod=>{
             Cart.addProduct(productId,prod.price) ;
             res.redirect('/cart')
      }).catch(err=> console.log(err));
      
      
}
exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
