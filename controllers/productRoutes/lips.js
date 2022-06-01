////////////////////////////////////////////////////////////
//                      REQUIRE DEPENDENCIES
////////////////////////////////////////////////////////////
const express = require('express');
const res = require('express/lib/response');
const Lips = require('../../models/lipsSeed');
const router = express.Router()
const Product = require('../../models/product');
////////////////////////////////////////////////////////////
//                      MIDDLEWARE
////////////////////////////////////////////////////////////
router.use(express.urlencoded({ extended: false }));
////////////////////////////////////////////////////////////
//                      ROUTES
////////////////////////////////////////////////////////////
////////////////////////SEED////////////////////////
router.get('/seed', (req, res) => {
    Lips.deleteMany({}, (error, allLips) => { });
	Lips.create(lipsSeed, (error, data) => {
		res.redirect('/dupe');
	});
});
//////////////////////// NEW ////////////////////////
router.get('/new', (req, res) => {
    res.render('lips/new.ejs')
})

//////////////////////// DELETE ////////////////////////
router.delete('/:id', (req, res) => {
    Lips.findByIdAndDelete(req.params.id, (error, data) => {
        res.redirect('/duped/:id')
    })
})

//////////////////////// UPDATE ////////////////////////
router.put('/:id', (req, res) => {
    Lips.findByIdAndUpdate(req.params.id, req.body,{
        new: true
    }, (error, updatedLips) => {
        res.redirect('/duped/:id')
    })
})

//////////////////////// CREATE ////////////////////////
router.post('/', (req, res) => {
    Lips.create(req.body, (error, createdLips) => {
        res.redirect('/duped')
    })
})

//////////////////////// EDIT ////////////////////////
router.get('/:id/edit', (req, res) => {
    Lips.findById(req.params.id, (error, foundLips) =>{
        res.render('edit.ejs', {
            Lips: foundLips
        })
    })
})


//////////////////////// SHOW ////////////////////////////
router.get('/:id', (req, res) =>{
    Lips.findById(req.params.id, (error, foundLips) =>{
        res.render('lips/show.ejs', {
            lips: foundLips,
        })
    })
})
module.exports = router
