// var bar = {
//     foo: function () { return this.baz },
//     baz: 1
// };
// (function () {
//     console.log(typeof arguments[0]());
// })(bar.foo)


// var a = 0;
// function B() {
//     console.log(a);
//     var a = 3;
//     console.log(a);
//     return function(){
//         console.log(a++);
//     }
// }
// var C = B();
// C();

// for (var i = 0; i < 6; i++) {
//     (function (i) {
//         setTimeout(function () {
//             console.log(i);
//         }, 1000 * i);
//     })(i)
// }
// let b = 3;
// console.log(b.toString());


function person1() {
    return 1;
}

function person2() {
}
x = new person1();
y = new person2();
console.log(x);
console.log(y);

