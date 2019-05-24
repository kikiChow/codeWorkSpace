function myBind(context) {
    var args = Array.prototype.slice(arguments,1);
    var self = this;
    return function () {
        var innerArgs = Array.prototype.slice(arguments);
        var finalArgs = args.concat(innerArgs);
        return self.apply(context,finalArgs);
    }
}