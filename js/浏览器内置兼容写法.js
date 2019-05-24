

//reduce
if (Array.prototype.reduce === undefined) {
    Array.prototype.reduce = function (fun, base) {
        base === undefined && (base == 0);
        for (var i = 0; i < this.length; i++) {
            if (this[i] !== undefined) {
                base = fun(base, this[i], i, this);
            }
        }
        return base;
    }
}
