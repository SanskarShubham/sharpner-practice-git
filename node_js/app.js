
const express  = require('express');

const app = express();

app.use((req,res,next)=>{
        console.log('test');
        next();
})
app.use((req,res,next)=>{
        res.send('<h1> welcome to express js</>');
})
app.listen(3000);