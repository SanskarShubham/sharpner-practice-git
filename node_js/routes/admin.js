const express  = require('express');
const router = express.Router();
const routesDir = require('../helper/path');
const path = require('path');
router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(routesDir,'views','add-product.html'));
})
router.post('/add-product',(req,res,next)=>{
        console.log(req.body);
        res.redirect('/');
})

 module.exports = router;