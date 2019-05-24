function myReduce(callback,initialValue) {
    var num = 0;
    if(initialValue !=undefined){
        total = initialValue;
    } else {
        total = this[0];
        num = 1;
    }

    for(i = num;i<this.length;i++){
        var item = this[i];
        total = callback(total,item,i,this);
    }
    return total;
}