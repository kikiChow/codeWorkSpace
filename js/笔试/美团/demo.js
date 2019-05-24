function spaceRun(arr) {
    var ans = 0;
    for (var i = 0; i < arr.length; i++) {
        ans += (+arr[i][3]);
    }
    return ans;
}
console.log(spaceRun([
    [0,0,0,7],[0,0,1,2],[0,1,0,4],[0,1,1,3],[1,0,0,6],[1,0,1,1],[1,1,0,5],[1,1,1,0]
]));
// function ifNeighbour(arr1,arr2) {
//     if()
// }