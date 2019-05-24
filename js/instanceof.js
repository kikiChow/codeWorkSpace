function instanceOf(left,right) {
    var proto = left.__proto__;
    var prototype = right.prototype;
    while(true){
        if(proto ==null) return false;
        if(ptoto ==prototype) return true;
        proto = proto.__proto__;
    }
}