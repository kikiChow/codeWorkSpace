function duplicate(numbers, duplication){
    if(numbers == null){
        return false;
    }
    for(var i = 0;i<numbers.length;i++){
        if(numbers.indexOf(numbers[i]) != numbers.lastIndexOf(numbers[i])){
            duplication[0] = numbers[i];
            return true;
        }
    }
    return false;
}
console.log(duplicate())