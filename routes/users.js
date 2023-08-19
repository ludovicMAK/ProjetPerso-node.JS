var express = require('express');
var router = express.Router();
const User = require('../models/usersModel');


router.get('/connection', function(req, res, next) {
  res.render('connection');
});

router.post('/connection', async function(req, res, next) {
  console.log(req.body);
  try{
    const user = await  User.findUser(req.body.email,req.body.password);
    res.send(user)
  }catch(e){
    
    res.status(400).render('connection',{error:e.message});
  }
});

router.get('/inscription',function(req,res,next){
  res.render('inscription');
})

router.post('/inscription', async function(req,res,next){
  console.log(req.body);
  try{
    if(req.body.password != req.body.passwordConf) throw ('les 2 mots de passe sont différents');
    const user = new User({nom:req.body.nom,
      prenom:req.body.prenom,
      email:req.body.email,
      password:req.body.password});
      
      await user.save();
      res.status(201).send('bien créé');
  }catch(e){
    let messageError;
    if(e.errors?.password){
      messageError = e.errors.password.properties.message;
    }else if(e?.keyPattern?.email){
      messageError = "Ce email est déjà utilisé";
    }else{
      messageError = e;
    }
    console.log(e);
    res.status(400).render('inscription',{ error: messageError });
  }
})

module.exports = router;
