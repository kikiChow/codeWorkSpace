import { eventNames } from "cluster";

var Event = function () {
    this.obj = {};
}
Event.prototype.on = function (eventType,fn) {
    if(!this.obj[eventType]){
        this.obj[eventType] = [];
    }
    this.obj[eventType].push(fn);
}
Event.prototype.emit = function (){
    var eventType = Array.prototype.shift.call(arguments);
    var arr = this.obj[eventType];
    for(let i = 0;i <arr.length;i++){
        arr[i].apply[arr[i],arguments];
    }
}
var ev = new Event();
ev.on('click', function (a) {
    console.log(a);
})
ev.emit('click',1);