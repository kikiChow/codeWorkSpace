//针对多行输入的情况
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('', callback);
rl.on('close', function (close) {
    process.exit();
});

var arr = [];
var num = 0;
function callback(string) {
    arr.push(string);
    if (arr.length == 1) {
        num = Number(string, 10);
    }

    if (arr.length > num) {
        process(arr);
        rl.close();
    } else {
        rl.question('', callback);
    }
}

function process(arr) {

    var count = 0;
    var flag = 3;
    function running(m) {
        for (var i = 0; i < m.length - 1; i++) {
            if (m[i] === m[i + 1] && flag === 3) {
                count++;
                m.splice(i, 2);
                i -= 2;

            }
        }
    }
    for (var i = 1; i < arr.length; i++) {
        let numbers = arr[i].split('').map(s => parseInt(s));

        running(numbers);
        if (count % 2 != 0) {
            console.log('Yes,you can win!');
        } else {
            console.log(no = 'Oh,no.');
        }
        count = 0;
    }
}