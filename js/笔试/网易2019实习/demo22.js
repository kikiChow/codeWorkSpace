//单行输入
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on('line', function (input) {
    inputArr.push(input);
    var str = inputArr[0];
    lengthOfLongestSubstring(str)
    // console.log('1'+inputArr[0]);
    // console.log('2'+ +inputArr[0]);//转化成数字类型
    // inputArr = [];


     function lengthOfLongestSubstring (s) {
        var res = 0; // 用于存放当前最长无重复子串的长度
        var str = ""; // 用于存放无重复子串
        var len = s.length;
        for (var i = 0; i < len; i++) {
            var char = s.charAt(i);
            var index = str.indexOf(char);
            if (index === -1) {
                str += char;
                res = res < str.length ? str.length : res;
            } else {
                str = str.substr(index + 1) + char;
            }
        }
        console.log(str) ;
    };
});