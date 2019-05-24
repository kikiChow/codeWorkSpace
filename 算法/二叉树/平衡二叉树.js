function IsBalanced_Solution(pRoot) {
    if (!pRoot) {
        return true;
    }
    var left = TreeDepth(pRoot.left);
    var right = TreeDepth(pRoot.right);
    if (Math.abs(left - right) > 1) {
        return false;
    }
    return IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right)

}

//二叉树深度
function TreeDepth(pRoot) {
    if(!pRoot){
        return 0 ;
    }
    var left = TreeDepth(pRoot.left);
    var right = TreeDepth(pRoot.right);
    return Math.max(left,right)+1;
}

