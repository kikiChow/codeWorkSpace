function demo(arr) {
    var count = 0;
    for(var i = 0;i<arr.length;i++){
        if(arr[i]%3==0){
            while(arr[i]!=1){
                arr[i] = arr[i]/3;
                count++;
            }
        }
    }
    return count;
}
console.log(demo([1,4,3,81,2]));