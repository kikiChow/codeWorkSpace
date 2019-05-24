function numberOf1(num) {
    var count = 0;
    while(num!=0){
        num = num &(num-1);
        count++;
    }
    return count;
}

console.log(-5);