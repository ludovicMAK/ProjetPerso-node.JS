const path = require("path")
const { engine } = require("express-handlebars")
const express = require('express')
const app = express()
const {ConnectionBd} = require('./src/services/connectionBd');
const userModel = require('./src/models/user')
app.engine('handlebars', engine());
app.set('view engine','handlebars');
//app.set('views',path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"views")));
app.use(express.static(path.join(__dirname,"public")));

app.get('/inscription',function(req,res){
  console.log(res.render('inscription'));
})
app.post('/inscription',function(req,res){
 console.log(req);
 res.send("je suis la");
})
app.get('/login', function (req, res) {
  console.log(res.render('login'));
  
})

app.listen(3000)