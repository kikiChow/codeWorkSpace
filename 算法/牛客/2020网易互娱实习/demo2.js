var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});


const lines = [];
rl.on('line', function (line) {
    lines.push(line);
    if (lines.length === 2) {
        var N = +lines[0];
        var arr = lines[1].split(' ');
        // console.log(N);
        // console.log(arr);
    }
})

fu

