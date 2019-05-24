//快速排序实现
function sort(arr) {
    if(arr.length<1) return arr;
    var flagIndex = Math.floor(arr.length/2);
    var flag = arr.splice(flagIndex,1);
    console.log(flag);
    var left = [];
    var right = [];
    for(var i = 0;i<arr.length;i++){
        if(arr[i]> flag){
            right.push(arr[i]);
        } else{
            left.push(arr[i]);
        }
    }
    return sort(left).concat(flag,sort(right));
}
var test = [3, 1, 5, 7, 2, 4, 9];

console.log("快排" + sort(test));