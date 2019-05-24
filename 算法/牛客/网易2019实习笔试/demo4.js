var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});


const lines = [];
rl.on('line',function (line) {
    lines.push(line);
    if(lines.length ===2){
        var n = +lines[0];
        var dirStr = lines[1];
        var leftNum = (dirStr.split('L')).length - 1;
        var rightNum = (dirStr.split('R')).length - 1;
        var leftRes = ['N','W','S','E'];
        var rightRes = ['N','E','S','W'];
        var num = 0;
        var result;
        // console.log(leftNum);
        // console.log(rightNum);
        num = leftNum > rightNum ?  leftNum - rightNum : rightNum - leftNum;
        num = num % 4;
        result = leftNum > rightNum ? leftRes[num] : rightRes[num];
        console.log(result);
    }
})