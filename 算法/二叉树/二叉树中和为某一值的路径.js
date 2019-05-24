var path;
var temp;
function FindPath(root, expectNumber) {
    // write code here
  
    path = [];
    temp = [];
    if(root === null){
        return [];
    }
    cal(root, expectNumber);
    return path;

 
}
function cal(root, expectNumber) {
    temp.push(root.val);
    if(root.val==expectNumber && root.left ==null &&root.right ==null){
        path.push(temp.slice());
    }else {
        if (root.left != null) cal(root.left, expectNumber-root.val);
        if (root.right != null) cal(root.right, expectNumber - root.val)
    }
    temp.pop();
}