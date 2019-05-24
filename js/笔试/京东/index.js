//单行输入
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (input) {
    var max = 0;
    var lineLength = input.length;
    var inputstr= input.split('');
    if(inputstr.indexOf('0')==-1){
        max = inputstr.length;
    }else{
        var arr = input.split('0');
        var res = [];
        for (var i = 0; i < arr.length; i++) {
            var length = arr[i].length;
            res.push(length);
        }


        if (input.charCodeAt(lineLength - 1) == '0') {
            max = res[0]
            for (var i = 0; i < res.length; i++) {
                if (res[i] > max) {
                    max = res[i];
                }
            }

        }
        else {
            max = res[0] + res[res.length - 1];
            for (var j = 1; j < res.length; j++) {
                if (res[j] > max) {
                    max = res[j];
                }
            }

        }
    }
    
    console.log(max)

});


