
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
        var len = arr.length;
        for (var j = 0; j < arr.length; j++) {
            arr[j] = +(arr[j]);
            if (arr[j] == 1 && j != len) {
                console.log(j);
            }
            if (arr[len - 1] == 1) {
                console.log(len - 1);
            }
        }
    } else {
        countline++;
    }
})




