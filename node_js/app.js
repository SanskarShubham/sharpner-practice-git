const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const shopRoutes = require('./routes/shop');
const sequelize = require('./util/databse');

const User = require('./models/user');
const Product = require('./models/product');

// User.sync().then().catch(err=>console.log(err));

// parsing the req data  
app.use(bodyParser.urlencoded({ extended: false }));
// connecting public folder for css ,images etc usaing static path 
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next)=>{
    User.findByPk(1).then((user)=>{
            req.user =user; 
    }).catch(err => console.log(err));
})

// ROUTES
app.use('/admin', adminRoutes);
// app.use('/api', userRoutes);
app.use(shopRoutes);
app.use(errorController.get404);

Product.belongsTo(User, { constrains: true, onDelete: 'CASCADE' });
User.hasMany(Product);
sequelize.sync()
    .then(() => {
        return User.findByPk(1)

    }).then(user => {
        if (!user) {
            User.create({ name: "shubham", email: "shubham@gmail.com" })
        }
        return Promise.resolve(user);
    }).then(user => {
        console.log(user);
        app.listen(3000);
    }).catch((err) => {
        console.log(err);
    });

