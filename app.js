const path = require("path")
const { engine } = require("express-handlebars")
const express = require('express')
const app = express()
const {ConnectionBd} = require('./src/services/connectionBd');
app.engine('handlebars', engine());
app.set('view engine','handlebars');
//app.set('views',path.join(__dirname,"views"));

//app.use(express.static(path.join(__dirname,"views")));
app.use(express.static(path.join(__dirname,"public")));


app.get('/login', function (req, res) {
  console.log(res.render('login'));
  
})

app.listen(3000)