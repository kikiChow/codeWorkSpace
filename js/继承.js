//原型链继承
function Parent1() {
    this.name = 'petter';
}
Parent1.prototype.getName = function () {
    console.log(this.name);
}

function Child1() {}
Child1.prototype = new Parent1();
var child1 = new Child1();


//构造函数继承
function Parent2() {
    this.name = 'dasiy';
}
function Child2() {
    Parent2.call(this);
}
var child2 = new child2();


//组合继承
function Parent3(name) {
    this.name = name;
    this.age = '23';
}
Parent3.prototype.sayHi = function () {
    alert('hi');
}
function Child3(name) {
    Parent3.call(this,name);
}
Child3.prototype = new Parent3();

//原型式继承
function object(o) {
    function F() {}
    F.prototype = o;
    return F();
}   


//寄生式继承
function createAnother(original) {
    var clone = object(original);
    clone.sayHi = function () {
        alert('hi');
    }
    return clone;
}

//寄生组合式继承
function inheitPrototype(sub,sup) {
    var prototype = object(sup.prototype);
    prototype.constructor = sub;
    sub.prototype = prototype; 
}
function Parent6(name) {
    this.name = name;
}
Parent6.prototype.sayName = function () {
    alert(this.name);
}
function Child6(name) {
    Parent6.call(this,name);
}
inheitPrototype(Child6,Parent6);


//手动实现new
function _new(fun) {
   return function () {
       //创建一个空对象
       let obj = {
           __proto__:fun.prototype
       }
       fn.apply(obj,arguments);
       return obj;
   }
}

function _new() {
    //创建一个新对象
    var obj = new Object();
    //获得构造函数
    let constructor = [].shift.call(arguments);
    //链接到原型
    obj.__proto__= constructor.prototype;
    //绑定this
    let result = constructor.apply(obj,arguments);
    //确保new出的是个对象
    return typeof result==='object'? result: obj;
}