const express = require('express');

const productController = require('../controller/product') 
const shopController = require('../controller/shop') 

const router = express.Router();

router.get('/', productController.getProducts);


router.get('/contact-us',shopController.getContactUs)

router.post('/success',shopController.postContactUs)


module.exports = router;
