
/* 将最大的元素调整到堆顶*/
function AdjustHeap(arr,pos,len) {
    var swap = arr[pos] //保存当前节点
    var child = pos*2 + 1; //当前节点的下一个左节点；
    while(child < len) {  //遍历所有子结点
        //判断当前节点有没有右节点，若右节点较大，则右节点和当前节点比较
        if(child+1 < len && arr[child] < arr[child+1]){
            child += 1;
        }
         //比较当前节点和最大的子节点，小于就交换，交换后将当前节点定位到子节点上
        if(arr[pos] < arr[child]){
            arr[pos] = arr[child];
            pos = child;
            child = pos * 2 + 1 ;
        }
        else {
            break;
        }
        arr[pos] = swap;
    }
}

//构建堆
function buildHeap(arr) {
    for(var i = arr.length/2;i>=0;i--){
        AdjustHeap(arr,i,arr.length);
    }
}

//堆排序
function heapSort(arr) {
    buildHeap(arr);//构建堆
    for (var i = arr.length - 1; i >= 0; i--) {  //从数组的尾部进行调整
        var swap = arr[i]; //堆顶永远是最大的元素,将堆顶和尾部元素交换，最大元素就保存在尾部，并且不参与后面的调整
        arr[i] = arr[0];
        arr[0] = swap;
        AdjustHeap(arr, 0, i); //将最大的元素进行调整，将最大的元素调整到堆顶
    }
}