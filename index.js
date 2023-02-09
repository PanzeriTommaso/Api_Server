const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})

//-- http://localhost:3000/match?a=checchia&b=belvedere
app.get('/match', function (req, res) {
    let a
    let b
    a=req.query.a;
    b=req.query.b;
    var num = Math.round(Math.random() * 100);
    res.send(a+' Match '+b+" = "+num+" %")
  })


app.listen(3000)