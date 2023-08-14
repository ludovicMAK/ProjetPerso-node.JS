const path = require("path")
const { engine } = require("express-handlebars")
const express = require('express')
const app = express()
app.engine('handlebars', engine());
app.set('view engine','handlebars');
//app.set('views',path.join(__dirname,"views"));

//app.use(express.static(path.join(__dirname,"views")));
app.use(express.static(path.join(__dirname,"public")));


app.get('/', function (req, res) {
  console.log(res.render('home'));
  
})

app.listen(3000)