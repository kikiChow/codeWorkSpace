Function.prototype.bind = function (context) {
    var self = this ;//保存原有函数
    // var context = Array.prototype.shift.call(arguments); //保存需要绑定this上下文

      // 获取bind2函数从第二个参数到最后一个参数
    var args = Array.prototype.slice.call(arguments,1); //将类数组转换为真是数组转换为数组
    return function () { //返回一个新函数
       // 这个时候的arguments是指bind返回的函数传入的参数
        var bindArgs = Array.prototype.slice.call(arguments);
        self.apply(context, args.concat(bindArgs));
    }
}


Function.prototype.bind2 = function (context) {
    var self = this; //保存原始函数
    var args = Array.prototype.slice.call(arguments,1);

    var fNOP = function () {};
    var fbound = function () {
        var bindArgs = Array.prototype.slice.slice.call(arguments);
        self.apply(this instanceof self ? this:context, args.concat(bindArgs))
    }
    fNOP.prototype = this.prototype; //维护原型关系，指向原始函数
    fbound.prototype = new fNOP(); //新函数的prototype的__proto__指向noop.prototype
    return fbound;
}