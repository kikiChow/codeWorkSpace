function oneCount(arr) {
    var result = 0;
    if (arr[0] == 1 && arr[arr.length - 1] == 1) {
        console.log('111');
        if (arr.indexOf(0)) {
            var Index = arr.indexOf(0);
            var firstCount = Index ;
            console.log(firstCount);
        }
        if (arr.lastIndexOf(0)) {
            var lastIndex = arr.lastIndexOf(0);
            var lastCount = arr.length - lastIndex-1;
            console.log(lastCount)
        } else {
            result = arr.length;
        }

        result = firstCount + lastCount;  
    }
    console.log(result) ;
}
oneCount([1, 1, 0, 1, 1]);