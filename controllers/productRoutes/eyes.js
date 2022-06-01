////////////////////////////////////////////////////////////
//                      REQUIRE DEPENDENCIES
////////////////////////////////////////////////////////////
const express = require('express');
const res = require('express/lib/response');
const router = express.Router()
const Product = require('../../models/product')
////////////////////////////////////////////////////////////
//                      MIDDLEWARE
////////////////////////////////////////////////////////////
router.use(express.urlencoded({ extended: false }));
////////////////////////////////////////////////////////////
//                      ROUTES
////////////////////////////////////////////////////////////
////////////////////////SEED////////////////////////
router.get('/seed', (req, res) => {
	Eyes.deleteMany({}, (error, allEyes) => { });
	Eyes.create(eyesSeed, (error, data) => {
		res.redirect('/dupe');
	});
});
//////////////////////// NEW ////////////////////////
router.get('/new', (req, res) => {
    res.render('eyes/new.ejs')
})
//////////////////////// DELETE ////////////////////////
router.delete('/:id', (req, res) => {
    Eyes.findByIdAndDelete(req.params.id, (error, data) => {
        res.redirect('/duped/:id')
    })
})

//////////////////////// UPDATE ////////////////////////
router.put('/:id', (req, res) => {
   Eyes.findByIdAndUpdate(req.params.id, req.body,{
        new: true
    }, (error, updatedEyes) => {
        res.redirect('/dupe/:id')
    })
})

//////////////////////// CREATE ////////////////////////
router.post('/', (req, res) => {
    Eyes.create(req.body, (error, createdEyes) => {
        res.redirect('/duped')
    })
})

//////////////////////// EDIT ////////////////////////
router.get('/:id/edit', (req, res) => {
    Eyes.findById(req.params.id, (error, foundEyes) =>{
        res.render('edit.ejs', {
            eyes: foundEyes
        })
    })
})

//////////////////////// SHOW ////////////////////////////
router.get('/:id', (req, res) =>{
    Eyes.findById(req.params.id, (error, foundEyes) =>{
        res.render('eyes/show.ejs', {
            eyes: foundEyes,
        })
    })
})
module.exports = router
