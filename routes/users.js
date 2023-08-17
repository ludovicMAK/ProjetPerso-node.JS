var express = require('express');
var router = express.Router();
const User = require('../models/usersModel');



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/inscription',function(req,res,next){
  res.render('inscription');
})

router.post('/inscription', async function(req,res,next){
  console.log(req.body);
  try{
    const user = new User({nom:req.body.nom,
      prenom:req.body.prenom,
      email:req.body.email,
      password:req.body.password});
      await user.save();
      res.status(201).send('bien créé');
  }catch(e){
    res.status(404).send('erreur survenue');
  }
  
})

module.exports = router;
