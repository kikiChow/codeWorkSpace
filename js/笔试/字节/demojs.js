//输入多行  
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";
var input_array = "";

process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', function () {
    input_array = input.split("\n");
    // 处理input
    // console.log(input_array);
    input_array = input_array.split('');
    for (var i = 0; i < input_array.length;i++){
        input_array[i] = input_array.split('');
    }
    
    demo1(input_array);
});






var status = [];
function demo1(arr) {
   
    var n = arr.length;
    var m = arr[0].length;
    var  status = new Array(n);
    for(var i = 0;i<status.length;i++){
        status[i] = new Array(m);
    }

    for (let i = 0; i < n; i++) {
        var  strings = arr[i]
        for (let j = 0; j < m; j++)
            status[i][j] = +strings[i][j];
    }

    var step = 0;
    while (getReverse(status))
        step++;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (status[i][j] == 1) {
                console.log(-1);
                return;
            }
        }
    }

    console.log(step);
    return;
 
}

function getReverse(nums) {
    var flag = false;
    var n = nums.length;
    var m = nums[0].length;
    var temp = new Array(n);
    for(var i = 0;i<temp.length;i++){
        temp[i] = new Array[m];
    }


    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            temp[i][j] = status[i][j];
        }
    }

    for ( let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (nums[i][j] == 2) {
                if (i - 1 >= 0 && nums[i - 1][j] == 1) {
                    temp[i - 1][j] = 2;
                    flag = true;
                }

                if (i + 1 < n && nums[i + 1][j] == 1) {
                    temp[i + 1][j] = 2;
                    flag = true;
                }

                if (j - 1 >= 0 && nums[i][j - 1] == 1) {
                    temp[i][j - 1] = 2;
                    flag = true;
                }

                if (j + 1 < m && nums[i][j + 1] == 1) {
                    temp[i][j + 1] = 2;
                    flag = true;
                }
            }
        }
    }

    status = temp;

    return flag;
}


// var c = [[2, 1, 1], [1, 1, 0], [0, 1, 1]];
// console.log(demo1(c));