//单行输入
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// var inputArr = [];
rl.on('line', function (input) {
    // inputArr.push(input);
    var str = input;
    console.log(str)
    

});
//是否回文子串
function isPalindrome(s) {
    var ds = s.toLowerCase();
    var d1 = [];
    //去除掉标点符号，空格，只保留字母和数字
    for (var i = 0; i < ds.length; i++) {
        if (ds.charCodeAt(i) >= 48 && ds.charCodeAt(i) <= 57 || ds.charCodeAt(i) >= 97 && ds.charCodeAt(i) <= 122) {
            d1.push(ds[i]);
        }
    }
    //将d1深拷贝给d2
    var d2 = d1.join('');
    console.log(d2);
    var d1 = d1.reverse().join('');
    console.log(d1);

    var res = d1 === d2 ? true : false;
    //比较d1和d2

    return res;
}

function easy(str) {
    var temp = str;
    str = str.split('').reverse().join();
    return temp === str ? true : false;
}
function demo(str) {
    
}