//单行输入
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on('line', function (input) {

    var lineLength = input.length;
    var arr = input.split('0');
    var res = [];
    var result = 0;
    for(var i = 0;i<arr.length;i++){
        var length = arr[i].length;
        res.push(length);
    }
    // console.log(input);
    var string = input.split('');
    if (string[lineLength - 1] == '1' && string[0] == '1'){  
        var temp = res[0]+res[res.length - 1];
        res.sort();
        result = Math.max(temp, res[res.length - 1]);
    }
    else{
        res.sort();
        result = res[res.length - 1];
    }
    console.log(result);
    // oneCount(inputStr);

});

    
// }

