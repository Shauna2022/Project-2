////////////////////////////////////////////////////////////
//                      REQUIRE DEPENDENCIES
////////////////////////////////////////////////////////////
const express = require('express');
const res = require('express/lib/response');
const router = express.Router()
const products = require('../models/product.js');
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
////////////////////////INDEX ////////////////////////
router.get('/', (req, res) => {
    Product.find({}, (err, allProducts) => {
        res.render('index,ejs', {
            product: allProducts
        })
    })
})

//////////////////////// NEW ////////////////////////
router.get('/new', (req, res) => {
    res.render('dupe/new.ejs')
})

//////////////////////// DELETE ////////////////////////
router.delete('/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id, (error, data) => {
        res.redirect('/dupe/:id')
    })
})

//////////////////////// UPDATE ////////////////////////
router.put('/:id', (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body,{
        new: true
    }, (error, updatedProduct) => {
        res.redirect('/dupe/:id')
    })
})

//////////////////////// CREATE ////////////////////////
router.post('/', (req, res) => {
    Product.create(req.body, (error, createdProduct) => {
        res.redirect('/dupe')
    })
})

//////////////////////// EDIT ////////////////////////
router.get('/:id/edit', (req, res) => {
    Product.findById(req.params.id, (error, foundProduct) =>{
        res.render('edit.ejs', {
            product: foundProduct
        })
    })
})

//////////////////////// SHOW ////////////////////////////
router.get('/:id', (req, res) =>{
    Product.findById(req.params.id, (error, foundProduct) =>{
        res.render('show.ejs', {
            product: foundProduct,
        })
    })
})

module.exports = router