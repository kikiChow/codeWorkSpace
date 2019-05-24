//服务器及页面响应部分
var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server); //引入socket.io模块并绑定到服务器

var users = [];
    app.use('/', express.static(__dirname + '/main'));
server.listen(3000);

//socket部分
io.sockets.on('connection', function (socket) {
    socket.on('login',function (nickname) {
        if (users.indexOf(nickname) > -1){
            socket.emit('nickExisted')
        } else {
            socket.userIndex = users.length;
            socket.nickname = nickname;
            users.push(nickname);
            socket.emit('loginSuccess');
            io.sockets.emit('system', nickname, users.length, 'login');
        }
    });

    socket.on('disconnect',function () {
        users.splice(socket.userIndex,1);
        socket.broadcast.emit('system', socket.nickname, users.length, 'logout');
    })
});