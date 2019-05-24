function curry(fn) {
    var args = [].slice.call(arguments,1);
    return function () {
        var newArgs = args.concat([].slice.call(arguments));
        return fn.apply(this,newArgs);
    }
}
function add(a, b) {
    return a + b;
}

