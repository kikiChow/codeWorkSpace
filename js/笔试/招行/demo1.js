var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputs = [];
var countline = 1;
rl.on('line', function (line) {
    inputs.push(line.trim());
    if(countline ===2){

    } else {
        countline++;
    }
    console.log(cholate(line));
});
function cholate(n) {
    // if (n < 6) { return 0; } let v = n - 6, res = 1; for (let i = 0; i < v; i++) { res += Math.pow(2, i); } return res % 666666666;
    if(n < 6){
        return 0 ;
    }
    return Math.pow(2,n-6) %666666666;
}