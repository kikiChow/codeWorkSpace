var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("456910"); //服务器响应 返回json数据
});
app.all('*', function (req, res, next) {
    // res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length,Authorization,Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", '3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
    // res.send({ "name": "john", "age": 23 });
})
app.listen(3000, function () {
    console.log('sever started at http://localhost:3000')
});