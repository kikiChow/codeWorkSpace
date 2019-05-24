var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputs = [];
var countline = 1;
rl.on('line', function (line) {
    inputs.push(line.trim());
    if (countline === 2) {
        var arr = inputs[1].split(' ');  

        demo3(arr);
        // demo3()
    } else {
        countline++;
    }
    function demo3(arr) {
        var count = 0;
        for (var i = 0; i < arr.length; i++) {
            while (arr[i] != 1) {
                arr[i] = Math.floor(arr[i] / 2);
                // console.log(arr[i])
                count++;
            }
            // console.log(Math.floor(arr[i]/2))
        }
        console.log(count);
    }
});


function ifTwo(num) {
    if(num != 1){
        while (num !=1) {
            if(num%2==0){
                num = num / 2;
            }
            else {
                return false;
            }
        } 
        return true;
    } else {
        return true;
    }
}