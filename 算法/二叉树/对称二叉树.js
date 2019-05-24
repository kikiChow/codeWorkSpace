function isSymmetrical(pRoot)
{
   if(pRoot==null){
       return true;
   }
    return isMirror(pRoot,pRoot);
}
function isMirror(root1,root2){
    if(root1==null&&root2==null){
        return true;
    }
    if((root1==null&&root2!=null)||(root1!=null&&root2==null)){
        return false;
    }
    if(root1.val!==root2.val){
        return false;
    }
    return(isMirror(root1.left,root2.right)&&isMirror(root2.left,root1.right));
}
