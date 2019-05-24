const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//单行输入
rl.on('line',function (line) {
    var tokens = line.split(' ');
    
    var start = +tokens[0];
    var end = +tokens[1];
    var count = 0;
    // var res = []
    for(var i = start;i<=end;i++){
 
        var tempSum = ((i+1)*i)/2;
            
        if (tempSum % 3===0){
            count ++;
        }
    }
    console.log(count);
  
})