//sleep的实现

//1、promise实现
function sleep1(ms) {
    var temp = new Promise((resolve) =>{
        console.log(111);
        setTimeout(resolve, ms);
    })
    return temp;
}
sleep1(2000).then(function () {
    console.log(2222);
})

//async封装
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function test() {
    var temp = await sleep(5000);
    console.log('sleep2')
    return temp;
}
test();
