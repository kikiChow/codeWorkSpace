
//确保只有一个实例 可以全局访问
var single = function (name) {
    this.name = name;
    this.instance = null;
}
single.prototype.getName = function () {
    console.log(this.name);
}
single.instance = function (name) {
    if(!this.instance){
        this.instance = new single(name);
    }
    return this.instance;
}