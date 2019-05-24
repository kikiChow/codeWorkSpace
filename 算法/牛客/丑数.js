function GetUglyNumber_Solution(index) {
    // write code here
    if (index == 0) {
        return 0;
    }
    var factor2 = 0;
    var factor3 = 0;
    var factor5 = 0;

    var uglyNum = [1];
    for (var i = 1; i < index; i++) {
        uglyNum[i] = Math.min(uglyNum[factor2] * 2, uglyNum[factor3] * 3, uglyNum[factor5] * 5);
        if (uglyNum[i] === uglyNum[factor2] * 2) {
            factor2++;
        }
        if (uglyNum[i] === uglyNum[factor3] * 3) {
            factor3++;
        }
        if (uglyNum[i] === uglyNum[factor5] * 5) {
            factor5++;
        }

    }
    return uglyNum[index-1];
}