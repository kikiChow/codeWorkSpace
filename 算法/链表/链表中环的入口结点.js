function EntryNodeOfLoop(pHead){
    var cur = pHead,obj={},temp;
    while(cur!=null){
        temp = cur.val;
        if (!obj[temp]){
            obj[temp] = 1;
            cur = cur.next;
        } else {
            return cur;
        }
    }
   
}