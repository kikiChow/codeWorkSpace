var express = require('express')
// var cookieParser = require('cookie-parser')
// var util = require('util');

var app = express()
// app.use(cookieParser())

app.get('/', function (req, res) {
    console.log('成功链接');
})

app.listen(8081)