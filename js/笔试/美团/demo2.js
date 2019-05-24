//多行输入：输入第一个数据为接下来要输入的行数
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on('line', function (input) {
    inputArr.push(input);
    var nLine = +inputArr[0];
    var arr1 =[];
    if (inputArr.length == (nLine * nLine * nLine+ 1)) {
        var arr = inputArr.slice(1);
        
       // console.log(arr);
        // inputArr = [];
        for(var i = 0;i<arr.length;i++){
            var temp = arr[i].split(' ');
            arr1.push(temp);
        }
        // console.log(arr1);
        console.log(spaceRun(arr1))
    }
});

function spaceRun(arr) {
    var ans = 0;
    for(var i = 0;i<arr.length;i++){
        ans +=(+arr[i][3]);
    }
    return ans;
}