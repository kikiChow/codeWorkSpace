
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



//单行输入
rl.on('line', function (line) {
    var tokens = line.split(' '); //获取第一行的内容，存为数组
    var n = +tokens[0];
    var k = +tokens[1];
    var count = 0;
    for(var i = 1 ;i <= n ;i++) {
        var s = Math.abs(i-k);
        for(var j=i; j <=n; j++) {
            if(i % j >= k){
                count++;
            }
        }
    }
    console.log(count);
});