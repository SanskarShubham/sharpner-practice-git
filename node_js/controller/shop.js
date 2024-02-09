exports.getContactUs = (req,res,next)=>{
    // res.sendFile(path.join(routesDir,'views','contact-us.html'));
    res.render('contact-us', {
        pageTitle: 'Contact Us',
        path: '/contact-us',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
      })
}

exports.postContactUs = (req,res,next)=>{
    console.log(req.body);
    // res.sendFile(path.join(routesDir,'views','success.html'));
    res.render('success', {
        pageTitle: 'success',
        path: '/success',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
      })
}
