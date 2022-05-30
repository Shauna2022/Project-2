////////////////////////////////////////////////////////////
//                      REQUIRE DEPENDENCIES
////////////////////////////////////////////////////////////
const express = require('express')
const methodOverride = require('method-override')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const productController = require('./controllers/products')
const product = require('./models/product')
////////////////////////////////////////////////////////////
//                      SET UP DATEBASE
////////////////////////////////////////////////////////////
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	
});
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

////////////////////////////////////////////////////////////
//                      MIDDLEWARE
////////////////////////////////////////////////////////////
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use('/product', productController)
////////////////////////////////////////////////////////////
//                      ROUTES
////////////////////////////////////////////////////////////
////////////////////////INDEX ////////////////////////
app.get('/dupe', (req, res) => {
    res.render('index.ejs');
});
////////////////////////////////////////////////////////////
//                      LISTEN FOR PORT
////////////////////////////////////////////////////////////
app.listen(3000, () =>{
    console.log('Express is listening...')
})

module.exports = app