
var readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
var inputs = [];
var countline = 1;
rl.on('line', function (line) {

    inputs.push(line.trim());

    if (countline === 2) {
        var num = inputs[0];
        var arr = inputs[1].split(" ");
        var result = arr.indexOf('1');
        console.log(result);
    } else {
        countline++;
    }
})




