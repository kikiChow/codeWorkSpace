//单行输入
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on('line', function (input) {
    inputArr.push(input);
    var list = inputArr[0].split(/\],\[/g);
        list[0] = list[0].slice(1).split(',').map((item)=> {
            return +item;
        });
        list[1] = list[1].slice(0,list[1].length-1).split(',').map((item)=>{
            return +item;
        })
    console.log(getDiff(list[0],list[1]));
    // console.log(str)
    // // console.log('1'+inputArr[0]);
    // // console.log('2'+ +inputArr[0]);//转化成数字类型
    // // inputArr = [];
    // var strArr = str.split('');
    // var index = strArr.indexOf(']');
    // var str1Arr = strArr.splice(1,index-1);
    // var str = str1Arr.join('')
    // // str1Arr = str1Arr.split(',');
    
    // // str1Arr.split(',')
        
    // console.log(str);
});


function getDiff(arr1,arr2) {
    return arr1.concat(arr2).filter(function (v,i,arr) {
        return arr.indexOf(v)=== arr.lastIndexOf(v);
    })
}