var count = 0;
function demo1(arr) {
     for (var k = 0; k < arr.length; k++) {
        if (arr[k].indexOf(1) != -1) {
            
        }
    }
    var rowLen = arr.length;
    var colLen = arr[0].length;
    for (var i = 0; i < rowLen;i++){
        for (var j = 0; j < colLen;j++){
            if(arr[i][j]==2){
                if (j <colLen-1 && arr[i][j+1]==1){
                    arr[i][j+1] = 2;
                }
                if (j>0 &&arr[i][j - 1] == 1) {
                    arr[i][j - 1] =2;
                }
                if (i < rowLen-1 &&arr[i+1][j] == 1) {
                    arr[i+1][j] =2;
                }
                if (i>0&&arr[i-1][j] == 1) {
                    arr[i-1][j] = 2;
                }
            }
        }
    }
    // for (var k = 0; k < arr.length; k++) {
    //     while (arr[k].indexOf(1) != -1) {
    //         count++;
    //         demo1(arr)
    //     }
    // }
    console.log(arr);
    // return count+1;
    
}
var c = [[2,1,1],[1,1,0],[0,1,1]];
console.log(demo1(c));