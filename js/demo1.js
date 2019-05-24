//settimeout promise执行顺序问题
// setTimeout(function(){
//     console.log(1);
// },0);

// new Promise(function(resolve){
//     console.log(2);
//     for(var  i = 0;i<10000;i++){
//         i ==9999 && resolve();
//     }
//     console.log(3);
// }).then(function(){
//     console.log(4);
// });
// console.log(5);

// setTimeout(function(){
//     console.log(1);
// },1000);
// setTimeout(function(){
//     console.log(2);
// },800);
// setTimeout(function(){
//     console.log(3);
// },600);

// setTimeout(console.log(1),1000)
// setTimeout(console.log(2),800)
// setTimeout(console.log(3),600)


// window.onload = function(){
//     var source = document.getElementById('source');
//     var target = document.getElementById('target');
//     source.ondragstart = function(event){
//         var e = event || window.event
//         console.log('开始拖拽');
//         e.dataTransfer.setData('text',e.target.id);
//     }
//         target.ondragenter = function(){
//             console.log('进入目标元素')
//         }
//         target.ondragover = function(event){
//             var event = event || window.event;
//             console.log('在目标元素中拖拽');
//             event.preventDefault()
//         }
//         target.ondragleave = function(){
//             console.log('拖放离开目标元素')
//         }
//         target.ondrop = function(event){
//             console.log('拖放');
//             var e = event || window.event
//             var data = e.dataTransfer.getData('text');
//             e.target.appendChild(document.getElementById(data));

//         }
// }

// var book = {
//     title :'Professional javascript',
//     author : [
//         'nicholsas'
//     ],
//     edition : 3,
//     year : 2011
// };
// var jsonText = JSON.stringify(book);
// var bookCopy = JSON.parse(jsonText);
// console.log(jsonText);
// // console.log(bookCopy);
// function createCORSRequest(method, url) {
//     var xhr = new XMLHttpRequest();
//     if ("withCredentials" in xhr) {
//         xhr.open(method, url, true);
//     } else if (typeof XDomainRequest !== "undifined") {
//         xhr = new XDomainRequest();
//         xhr.open(method, url);
//     } else {
//         xhr = null;
//     }
//     return xhr;
// }
// var request = createCORSRequest('get','http://www.baidu.com');
// if(request){
//     request.onload = function(){

//     }
//     request.onerror = function(){

//     }
//     request.send(null);

// }
// var c = Object.prototype.toString.call([1,2,3]);
// console.log(c);

// function compare(v1,v2) {
//     if(v1<v2){
//         return 1;
//     } else if(v1>v2){
//         return -1
//     } else{
//         return 0;
//     }
// }

// var arr = [3,6,1,9];
// console.log(arr.sort(compare));


//组合式继承
// function Super(name) {
//     this.name = name;   
// }
// Super.prototype.sayName = function () {
//     alert(this.name);
// }
// function Sub(name,age) {
//     Super.call(this,name);
//     this.age= age; 
// }
// Sub.prototype = new Super();
// Sub.prototype.constructor = Sub;
// function split(str) {
//     var len = str.length;
//     var arr = str.split('');
//     var res
//     console.log(arr)
    
//     if (len> 6){
//         arr.splice(6,0,' ');
//         if(len>14){
//             arr.splice(14,0,' ');
//         }
//     }
//     res = arr.join('');
//     console.log(res)
// }
// var c = '12345678888883434';
// split(c);
// var c = ["1", "2", "3", "4", "5", "6", "7", "8"];
// console.log(c.splice(5, 0, '2'))
// var colors = ['red','d','sd'];
// var add = colors.splice(2,0,'df');
// console.log(add);

// ['1', '2', '3'].map(parseInt);
// console.log(Math.ceil((Math.random())*5));