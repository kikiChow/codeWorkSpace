//解码
function test(str) {
    
    var strArr = str.split('&');
    var res = [];
    var obj = {};

    for (var i = 0; i < strArr.length; i++) {
        var temp = strArr[i].split('=');
        res.push(temp)
    }
    // console.log(res);
    for (var i = 0; i < res.length; i++) {
        obj[res[i][0]] = res[i][1];
    }
    obj = JSON.stringify(obj)
    console.log(obj)
}
test('a=c&c=d&m=n');