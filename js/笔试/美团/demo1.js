var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (line) {
    console.log(Fibonacci(+line));


});
// function fibonacci(n) {
//     if (n < 0) {
//         return 0;
//     }
//     if (n == 1 || n == 0) {
//         return 1;
//     }
//     let first = 1,
//         second = 1,
//         result = 0;
//     for (let i = 2; i <= n; i++) {
//         result = first + second;
//         first = second;
//         second = result;
//     }
//     return result;
// }


// 非递归实现
function Fibonacci(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    var minusOne = 1;
    var minusTwo = 1;
    var num;
    for (var i = 2; i <= n; i++) {
        num = minusOne + minusTwo;
        minusOne = minusTwo;
        minusTwo = num;
    }
    return num;
}


