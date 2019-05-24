// 输入两个单调递增的链表，输出两个链表合成后的链表，
// 当然我们需要合成后的链表满足单调不减规则。

function ListNode(x) {
    this.val = x;
    this.next = null;
}
function Merge(pHead1, pHead2){
    var head = new ListNode();
    var pHead = head;
    while(pHead1!=null &&pHead2!=null){
        if (pHead1.val > pHead2.val) {
            head.next = pHead2;
            pHead2 = pHead2.next();
        } else {
            head.next = pHead1;
            pHead1 = pHead1.next();
        }
        head = head.next;
    }
    if(pHead1 !=null){
        head.next = pHead1;
    }
    if(pHead2 != null){
        head.next = pHead2;
    }
    return pHead.next;
   
}