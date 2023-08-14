const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.render('home');
})

app.listen(3000)