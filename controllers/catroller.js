const express = require('express');
const router = express.Router();

const Cats = require('../models/cats');


router.get('/', (req, res) => {
  Cats.find({}, (err, allCats) => {
    if(err){
      console.log(err);
    } else {
      console.log(allCats)
      // allFruits, is still an array
      res.render('index.ejs', {cats: allCats});
    }
  });
});

router.get('/new', (req, res) => {
  res.render('new.ejs');
});


router.post('/new', (req, res) => {
  console.log(req.body, ' this is where our info from the fruit form will live');

  // Rewrite this code to use mongodb
  Cats.create(req.body, (err, createdCat) => {
    if(err){
      console.log(err)
    } else {
      console.log(createdCat);
      res.redirect('/cats')
    }
  })

});


router.get('/:id/edit', (req, res) => {

  Cats.findById(req.params.id, (err, foundCat) => {
      res.render('edit.ejs', {
        cat: foundCat,

      });
  });

});


router.get('/:id', (req, res) => {
  console.log(req.params);
  Cats.findById(req.params.id, (err, foundCat) => {
    console.log(foundCat, ' foundCat')
      res.render('cat.ejs', {
        cat: foundCat
      });
  });
});


router.delete('/:id', (req, res) => {
  console.log(req.params.id, ' id in delete route');
  Cats.findByIdAndRemove(req.params.id, (err, deleteCat) => {
    res.redirect('/cats');
  });
});


router.put('/:id', (req, res) => {
  console.log(req.params.id, ' id in the put route');
  console.log(req.body, ' this should be our form data');

  Cats.findByIdAndUpdate(req.params.id, req.body, (err, updatedModel) => {
    res.redirect('/cats')
  });


})
module.exports = router;
