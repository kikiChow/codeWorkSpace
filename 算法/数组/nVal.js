//.写个函数，参数为n和value，需要返回一个长度为n的数组，里面每个元素都是value，不能使用循环。

function demo(val,n) {
    var res = [];
    function arrPush(val,n) {
        if(res.length===n){
            return;
        }
        res.push(val);
        arrPush(val,n);
    }
    arrPush(val,n);
    return res;
}

console.log(demo('hello',5))