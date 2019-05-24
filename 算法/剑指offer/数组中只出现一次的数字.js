//一个整型数组里除了两个数字之外，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。
function FindNumsAppearOnce(array){
    var temp = [];
    array = array.sort(compare);
    console.log(array);
    for(var i = 0;i<array.length;i++){
        if (GetNumberOfK(array, array[i])==1){
            temp.push(array[i]);
        }
    }
    return temp;
}
function compare(a,b) {
    return a-b;
}
function GetNumberOfK(data, k) {
    var arr = data.sort(compare);
    // console.log(arr);
    var res = 0;
    if (arr.indexOf(k) != -1) {
        var index = arr.indexOf(k);
        var lastIndex = arr.lastIndexOf(k);
        // console.log(index, lastIndex);
        res = lastIndex - index + 1;
    }
    return res;

}
console.log(FindNumsAppearOnce([1,2,2,3,3,4,1,3,5]));