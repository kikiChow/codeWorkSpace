var http = require('http');
var server = http.createServer(function (req,res) {
    console.log('有客户端链接') //创建连接成功显示在后台
    res.writeHead(200, { 'content-type': 'text/html;charset="utf-8"'});
    res.write('这是正文部分'); //显示给客户端
    res.sendDate();
}).listen(3333);
console.log('服务器开启成功');
