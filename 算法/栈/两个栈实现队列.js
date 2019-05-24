var stack1= [];
var stack2 = [];

//入队列
function push(node) {
    stack1.push(node);
}
//出队列
function pop() {
    return stack1.shift();
}