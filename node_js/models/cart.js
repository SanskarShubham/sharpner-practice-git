const path = require('path');
const fs = require('fs');
const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
);

module.exports = class Cart {

    static addProduct(id, productPrice) {
        // fetch the previous cart
        // console.log(p,'bauwa');
        fs.readFile(p, (err, fileContent) => {
            let cart = { products: [], totalPrice: 0 };
            // console.log(err,'test');
            // console.log(fileContent,'2test');
            if (!err) {

                cart = JSON.parse(fileContent);
            }
            // analyze the  cart => find the existing product
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;
            if (existingProduct) {
                updatedProduct = { ...existingProduct };
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products] ;
                cart.products[existingProductIndex] = updatedProduct;
                // console.log(cart.products);
            } else {
                updatedProduct = { id: id, qty: 1 };
                cart.products = [...cart.products, updatedProduct];

            }
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(p, JSON.stringify(cart), (err) => {
                console.log(err);
            })

        })
    }
}