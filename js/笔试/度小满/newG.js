var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (line) {
    console.log(f1(line));
});
function iscircle(str) {
    if (str === str.split("").reverse().join("")) {
        return true;
    }
    return false;
}

function f1(str) {
    var strList = str.split(""),
        temp = strList;
    function swap(a, b) {
        var temp = strList[a];
        strList[a] = strList[b];
        strList[b] = temp;
    }
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            swap(i, j);
            if (iscircle(strList.join(""))) {
                return true;
            }
            else {
                strList = temp
            }
        }
    }
    return false;
}