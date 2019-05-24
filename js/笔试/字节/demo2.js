var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var arr = [];
var cur_line = 0;
rl.on('line', function (line) {
    if (cur_line == 0) {
        arr.push(line.trim())
        cur_line++
    } else {
        arr.push(line.trim().split(' '))
        console.log(robotJump(arr[0], arr[1]));
    }
});

function robotJump(len, arr) {
    var result = 0,
    var current = 0;
    for (var j = +len - 1; j >= 0; j--) {
        arr[j] = +(arr[j]);
        result = Math.pareseInt((current + arr[j]) / 2)+1;
        current = result;
    }
    return res;
}