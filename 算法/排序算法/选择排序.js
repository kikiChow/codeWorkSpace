//选择排序
function sort(arr) {
    if(arr.length==0){
        return arr;
    }
    for(var i = 0;i<arr.length;i++){
        var minIndex = i ;
        for(var j = i;j<arr.length;j++){
            if(arr[j] <arr[minIndex]){
                minIndex = j;
            }         
        }
        var temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}