////////////////////////////////////////////////////////////
//                      REQUIRE DEPENDENCIES
////////////////////////////////////////////////////////////
const express = require('express');
const res = require('express/lib/response');
const router = express.Router()
const Product = require('../../models/product');
const complextionSeed = require('../../models/complextionSeed');
const Complextion = require('../../models/complextionSeed');
//////////////////////////snacks//////////////////////////////////
//                      MIDDLEWARE
////////////////////////////////////////////////////////////
router.use(express.urlencoded({ extended: false }));
////////////////////////////////////////////////////////////
//                      ROUTES
////////////////////////////////////////////////////////////
////////////////////////SEED////////////////////////
router.get('/seed', (req, res) => {
    Complextion.create(complextionsSeed, (error, data) => {
    Complextion.deleteMany({}, (error, allComplextion) => { });
    res.redirect('/dupe/complextion');
	});
});
//////////////////////// NEW ////////////////////////
router.get('/new', (req, res) => {
    res.render('/dupe/complextion/new.ejs')
})
//////////////////////// DELETE ////////////////////////
router.delete('/:id', (req, res) => {
    Complextion.findByIdAndDelete(req.params.id, (error, data) => {
        res.redirect('/dupe/complextion/:id')
    })
})

//////////////////////// UPDATE ////////////////////////
router.put('/:id', (req, res) => {
    Complextion.findByIdAndUpdate(req.params.id, req.body,{
        new: true
    }, (error, updatedComplextion) => {
        res.redirect('/dupe/complextion/:id')
    })
})

//////////////////////// CREATE ////////////////////////
router.post('/', (req, res) => {
    Complextion.create(req.body, (error, createdComplextion) => {
        res.redirect('/dupe/complextion')
    })
})

//////////////////////// EDIT ////////////////////////
router.get('/:id/edit', (req, res) => {
    Complextion.findById(req.params.id, (error, foundComplexion) =>{
        res.render('edit.ejs', {
            complextion: foundComplexion
        })
    })
})

//////////////////////// SHOW ////////////////////////////
router.get('/complextion', (req, res) =>{
    Complextion.find(req.params.id, (error, foundComplexion) =>{
        res.render('complextion/show.ejs', {
            complexion:foundComplexion,
        })
    })
})
module.exports = router