window.onload = function () {
    //实例并初始化程序
    var joinChat = new JoinChat();
    joinChat.init();
}

var JoinChat = function () {
    this.socket = null;
}

JoinChat.prototype = {
    init: function () {
        var that = this;
        this.socket = io.connect();
        this.socket.on('connect',function () {
            document.getElementById('info').textContent = '给自己取个昵称^.^'
            document.getElementById('nickWrapper').style.display = 'block';
            document.getElementById('nicknameInput').focus();
        
        });
        this.socket.on('nickExisted',function () {
            document.getElementById('info').textContent = '昵称已被占用，请换一个昵称'
        })
        this.socket.on('loginSuccess',function () {
            document.title = 'joinchat|' + document.getElementById('nicknameInput').nodeValue;
            document.getElementById('loginWrapper').style.display='none';
            document.getElementById('messageInput').focus();
        });
        this.socket.on('error',function (err) {
            if (document.getElementById('loginWrapper').style.display == 'none') {
                document.getElementById('status').textContent = '!fail to connect :(';
            } else {
                document.getElementById('info').textContent = '!fail to connect :(';
            }
        });
        this.socket.on('system',function (nickName,userCount,type) {
         //判断用户是连接还是离开以显示不同的信息
            var msg = nickName +(type=='login'?'joined':left);
            var p = document.createElement('p');
            p.textContent = msg;
            document.getElementById('historyMsg').appendChild(p);
            //将在线人数显示到页面顶部
            document.getElementById('status').textContent = userCount+(userCount>1 ? 'users':'user')+'online';
        });

        document.getElementById('loginBtn').addEventListener('click', function () {
            var nickName = document.getElementById('nicknameInput').value;
            if (nickName.trim().length != 0) {
                that.socket.emit('login', nickName);
            } else {
                document.getElementById('nicknameInput').focus();
            };
        }, false);
        document.getElementById('nicknameInput').addEventListener('keyup', function (e) {
            if (e.keyCode == 13) {
                var nickName = document.getElementById('nicknameInput').value;
                if (nickName.trim().length != 0) {
                    that.socket.emit('login', nickName);
                };
            };
        }, false);
    }
}