var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/inscription', function(req, res, next) {
  res.render('formulaire');
});

router.post('/submit',async function(req,res,next){
  
  const user = new User(req.body);
  try{
    res.status(201).send(user);
  }catch(e){
    res.status(400).send(e);
  }
  
  res.send('Données reçues avec succès !');
})

module.exports = router;
