//symbol实现
(function () {
    var root = this;
    var symbolPolyfill = function Symbol(description) {
        if (this instanceof symbolPolyfill) throw new TypeError('Symbol is not a constructor');

        var descString = description === undefined ? undefined: String(description);
        var symbol = Object.create(null);
        Object.defineProperty(symbol,{
            '__Description__':{
                value: descString,
                writable: false,
                enumerable: false,
                configurable: false
            }
        });
        return symbol;
    }
    root.symbolPolyfill =symbolPolyfill;
})
