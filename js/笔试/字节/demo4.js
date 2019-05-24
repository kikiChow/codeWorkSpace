
var readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
var inputs = [];
var countline = 1;
rl.on('line', function (line) {

    inputs.push(line.trim());
    var lines= +inputs[0]
    if (countline === lines+1) {
        
        var temp = inputs.slice(1);
        for(var i = 0;i<temp.length;i++){
            temp[i].split('');
        }
        console.log(temp)
    } else {
        countline++;
    }
})




