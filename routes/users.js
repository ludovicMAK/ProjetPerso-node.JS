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

// router.post('/inscription', async function(req,res,next){
//   console.log(req.body);
//   const user = new User({nom:'mak',
//                               prenom:'ludovic',
//                               email:'ludovic93mak@gmail.com',
//                               password:'root1234'});
//   await user.save();
// })

module.exports = router;
