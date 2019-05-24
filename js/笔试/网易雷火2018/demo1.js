//单行输入
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on('line', function (input) {
    inputArr.push(input);
    process(inputArr[0]);
    function process(str) {
        var result = '';
        // var strArr = str.split('');
        var count = 0;
        var res = {};
        for (var i = 1; i < str.length; i++) {
            if (str[i] === str[i - 1]) {
                count++;
            } else {
                res[str[i - 1]] = count + 1;
                count = 0;
            }
        }
        for (var key in res) {
            result += res[key] + key;
        }
        console.log(result)
    }

});

