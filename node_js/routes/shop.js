const express  = require('express');
const router = express.Router();
const routesDir = require('../helper/path');
const path = require('path');

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(routesDir,'views','home.html'));
})

router.get('/contact-us',(req,res,next)=>{
    res.sendFile(path.join(routesDir,'views','contact-us.html'));
})

router.post('/success',(req,res,next)=>{
    console.log(req.body);
    res.sendFile(path.join(routesDir,'views','success.html'));
})

module.exports = router;