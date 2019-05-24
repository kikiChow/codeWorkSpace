function MoreThanHalfNum_Solution(numbers){
    numbers = numbers.sort(compare);
   //console.log(numbers);
    var temp = [...new Set(numbers)];
   // console.log(temp);
    var flag = Math.floor(numbers.length/2) +1;
   // console.log(flag);
    for (var i = 0; i < temp.length;i++){
        if (numbers.lastIndexOf(temp[i]) - numbers.indexOf(temp[i]) == flag-1 ){
            return temp[i];
        }
    }
    return false;
}
function compare(a,b) {
    return a-b;
}
console.log(MoreThanHalfNum_Solution([1, 2, 3, 2, 2, 2, 5, 4, 2]));