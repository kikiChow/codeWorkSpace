var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var args = [];
var cur_line = 0;
rl.on('line', function (line) {
    if (cur_line == 0) {
        args.push(line.trim())
        cur_line++
    } else {
        args.push(line.trim().split(' '))

        var arr = args[1];
        var result = 0;
        var current = 0;
        for (var i = +args[0] - 1; i >= 0; i--) {
            arr[i] = +arr[i];
            result = Math.ceil((current + arr[i]) / 2);
            current = result;
        }
        console.log(result);
    }
});

// function demo2(len, arr) {
//     var result = 0;
//     var current = 0;
//     for (var i = +len - 1; i >= 0; i--) {
//         arr[i] = +arr[i];
//         result = Math.ceil((current + arr[i]) / 2);
//         current = result;
//     }
//     console.log(result);
// }