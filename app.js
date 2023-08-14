const express = require('express')
const path = require("path")
const { engine } = require("express-handlebars")
app.engine('handlebars', engine());
app.set('view engine','handlebars');
//app.set('views',path.join(__dirname,"views"));

//app.use(express.static(path.join(__dirname,"views")));
app.use(express.static(path.join(__dirname,"public")));
const app = express()

app.get('/', function (req, res) {
  res.render('home');
})

app.listen(3000)