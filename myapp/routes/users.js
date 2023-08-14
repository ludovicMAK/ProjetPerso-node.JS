var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/inscription', function(req, res, next) {
  res.render('formulaire');
});

router.post('/submit',function(req,res,next){
  const { nom, email, message } = req.body;
  console.log(req.body);
  res.send('Données reçues avec succès !');
})

module.exports = router;
