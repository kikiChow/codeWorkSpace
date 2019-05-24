function GetNumberOfK(data, k){
    var arr = data.sort(compare);
    // console.log(arr);
    var res = 0;
    if (arr.indexOf(k) != -1){
        var index = arr.indexOf(k);
        var lastIndex = arr.lastIndexOf(k);
        // console.log(index, lastIndex);
        res = lastIndex-index+1;
    }
    return res;

}
function compare(a,b) {
    return a-b;
}
console.log(GetNumberOfK([1,2,3,4,2,8,12],2));