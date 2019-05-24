function moreThanHalfNum(arr) {
    var obj = {};
    var length = numbers.length;
    numbers.forEach(function (d) {
        if (obj[d]) {
            obj[d]++;
        } else {
            obj[d] = 1;
        }
    })
    for (var i in obj) {
        if (obj[i] > Math.floor(length / 2)) {
            return i;
        }
    }
    return 0;
}
