//托在url后面的参数 转换成规定的格式

function getParamStr(param) {
    var str = "?";
    for (var o in param) {
        str += encodeURIComponent(o) + "=" + encodeURIComponent(param[o]) + "&";
    }
    str = str.slice(0, str.length - 1);
    return str;
}

function Ajax() {};

//get请求
Ajax.prototype.get = function (url,param,callback = () =>{}) {
    var xhr = new XMLHttpRequest();
    xhr.onreadychange = function () {
        if(xhr.readyState ==4){
            if(xhr.status>=200 &&xhr.status<300){
                var obj = JSON.parse(xhr.responseText);
                callback(null,obj);
            }
            else {
                callback('error')
            }
        }
    }
    xhr.open('get', url + getParamStr(param),true);
    xhr.send(null);
}

//post请求
Ajax.prototype.post = function (url,param,callback = () =>{}) {
    var xhr = new XMLHttpRequest();
    xhr.onreadychange = function() {
        if(xhr.readyState == 4){
            if(xhr.status >= 200 && xhr.status <300){
                var obj = JSON.parse(xhr.responseText);
                callback(null,obj);
            }
        } 
        else {
            callback('error');
        }
    }
    xhr.open('post',url,true);
    xhr.send(param);
}