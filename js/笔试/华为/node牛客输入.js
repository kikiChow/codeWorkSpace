process.stdin.resume();
var input = '';
process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {
    input = data;
})
process.stdin.on('end', function () {
    var input_array = input.trim().split('\n');
    var arr = [];
    var len = input_array.length;
    for (var i = 0; i < len; i++) {
        var newArr = input_array[i].trim().split(' ');
        for (var index = 0; index < newArr.length; index++) {
            if (arr.indexOf(newArr[index]) != -1) {
                continue;
            } else {
                arr.push(newArr[index]);
            }
        }
    }
    console.log(arr.length);
});