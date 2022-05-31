////////////////////////////////////////////////////////////
//                      REQUIRE DEPENDENCIES
////////////////////////////////////////////////////////////
const express = require('express');
const res = require('express/lib/response');
const router = express.Router()
const Product = require('../../models/product.js');
////////////////////////////////////////////////////////////
//                      MIDDLEWARE
////////////////////////////////////////////////////////////
router.use(express.urlencoded({ extended: false }));
////////////////////////////////////////////////////////////
//                      ROUTES
////////////////////////////////////////////////////////////
////////////////////////SEED////////////////////////
router.get('/seed', (req, res) => {
	Product.deleteMany({}, (error, allProducts) => { });
	Product.create(productsSeed, (error, data) => {
		res.redirect('/dupe');
	});
});

//////////////////////// SHOW ////////////////////////////
router.get('/:id', (req, res) =>{
    Product.findById(req.params.id, (error, foundProduct) =>{
        res.render('show.ejs', {
            product: foundProduct,
        })
    })
})
module.exports = router
module.exports = Product