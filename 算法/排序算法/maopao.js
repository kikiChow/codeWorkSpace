//冒泡排序实现
function sort(arr) {
    for(var i = 0;i<arr.length;i++){
        for(var j = 0;j<arr.length-i-1;j++ ){
            if(arr[j]>arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}
var test = [3,1,5,7,2,4,9];
sort(test)
console.log(test);