const fs = require('fs');


module.exports = class Product{

constructor(title){
    this.title = title;
}

save(){
   let products =  fs.readFileSync('message.txt','utf-8')
    if (products.trim() !== '') {
    
        products = JSON.parse(products);
    }else{
        products =[];
    }
   
    products.push({title:this.title});

    fs.writeFile('message.txt',JSON.stringify(products),(err)=>{
            if (err) {
                throw err;
            }
    })
}

static fetchAll(){
    const products = JSON.parse(fs.readFileSync('message.txt'))
  
    return products;
}
}