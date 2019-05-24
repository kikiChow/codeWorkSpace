function demo1(N,arr) {
    var str = '';
    for(var i = 0;i <arr.length;i++){
        var n = arr[i].length;
        
        arr[i]= n > N ? arr[i].slice(N) : arr[i];
        str += n > N ? arr[i].slice(0,n+1) : '';
    }
    return str ; 
}
var test = demo1(3,['2567957','17434']);
console.log(test);

