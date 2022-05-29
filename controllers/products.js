////////////////////////////////////////////////////////////
//                      REQUIRE DEPENDENCIES
////////////////////////////////////////////////////////////
const express = require('express');
const res = require('express/lib/response');
const router = express.Router()
const Product = require('../models/product')

////////////////////////////////////////////////////////////
//                      MIDDLEWARE
////////////////////////////////////////////////////////////
router.use(express.urlencoded({ extended: false }));
////////////////////////////////////////////////////////////
//                      ROUTES
////////////////////////////////////////////////////////////
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
    res.render('new.ejs')
})

//////////////////////// DELETE ////////////////////////
router.delete('/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id, (error, data) => {
        res.redirect('/duped/:id')
    })
})

//////////////////////// UPDATE ////////////////////////
router.put('/:id', (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body,{
        new: true
    }, (error, updatedProduct) => {
        res.redirect('/duped/:id')
    })
})

//////////////////////// CREATE ////////////////////////
router.post('/', (req, res) => {
    Product.create(req.body, (error, createdProduct) => {
        res.redirect('/duped')
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
