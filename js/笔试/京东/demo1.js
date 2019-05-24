//单行输入
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on('line', function (input) {
    inputArr.push(input);
    var inputStr = inputArr[0].split('');
    // console.log(inputStr);
    
    oneCount(inputStr);
    
});
function oneCount(arr) {
    var temp1 = 0;
    var temp2 = 0;
    var res = 0;
    if (arr[0] == 1 && arr[arr.length - 1] == 1) {
        // console.log('111');
        if (arr.indexOf('0')) {
            var Index = arr.indexOf('0');
            var firstCount = Index;
            // console.log(firstCount);
        }
        if (arr.lastIndexOf('0')) {
            var lastIndex = arr.lastIndexOf('0');
            var lastCount = arr.length - lastIndex - 1;
            console.log(lastCount)
        } else {
            result = arr.length;
        }

        result = firstCount + lastCount;
        temp1 = result;
    }
    else{
        temp2 = demo(arr);
    }
    res = Math.max(temp1,temp2);
    return res;
}
function demo(arr) {
    var temp = 0;
    var sum = 0;
    for(var i = 0;i<arr.length;i++){
        if(arr[i]=='1'){
            sum +=1;
        }else{
            sum = 0;
        }
        if(temp < sum){
            temp = sum;
        }
        return temp;
    }
}
