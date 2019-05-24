function parseUrl(url) {
    var str = url.split('?')[1];
    var items = str.split('&');
    var result = {};
    var temp = {};
    for(var i = 0;i<items.length;i++){
        temp = items[i].split('=');
        result[temp[0]]= temp[1];
    }
    return result;
}

console.log(parseUrl(' http://witmax.cn/index.php?key0=0&key1=1&key2=2'))
