const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on('line', function (input) {
    input = input.split(' ');
    var arr =[];
    for(var i = 0;i <input.length;i++){
        input[i] = parseInt(input[i]);
    }
    inputArr.push(input);

    var nLine = +inputArr[0][0] + 2;
    var workNum = nLine - 2;
    var personNum = inputArr[0][1];

    if (inputArr.length == nLine) {
        arr = inputArr
        // console.log(arr);
        inputArr = [];
        var task = [];

        for (var i = 1; i < nLine - 1; i++) {
            task.push(arr[i]);
        }

        var person = arr[nLine - 1];

        // console.log('task', task);
        // console.log('person', person);
        // console.log('workNum', workNum);
        // console.log('personNum', personNum);
        getPay(personNum, workNum, person, task);
    }

});

function getPay(personNum,workNum,person, task) {
    var temp=[]
    var result;
    for (var i = 0; i < personNum; i++){
        for (var j = 0; j < workNum;j++){
            if(person[i]>=task[j][0]){
                temp.push(task[j][1]);
               
            }
        }
        temp.sort();
        result = temp[temp.length - 1];
        console.log(result);
    }
}