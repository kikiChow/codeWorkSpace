function Fibonacci(n) {
    if(n<0){
        return 0;
    }
    if(n ==1 || n==0){
        return 1;
    }
    var first =1;
    var second = 1;
    var res = 0;
    for(var i = 2;i<n;i++){
        res= first+ second;
        first = second;
        second = res;
    }
    return res;
}