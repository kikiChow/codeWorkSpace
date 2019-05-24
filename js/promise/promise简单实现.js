function Promise(fn) {
    var data = undefined;
    var reason = undefined;
    var succallbacks = [];
    var failcallbacks = [];
    this.status = 'pending';
    this.then = function (fulfilled, rejected) {
        return new Promise(function (resolve, reject) {

            function suc(value) {
                resolve(value)
            }
            function errback(reason) {
                reject(reason)
            }
            if (status = 'pending') {
                succallbacks.push(suc);
                failcallbacks.push(errback);
            }
            if (status = 'fulfilled') {
                suc(data)
            } else {
                reject(reason);
            }
        })
    }
    function resolve(value) {
        setTimeout(() => {
            status = 'fulfilled';
            data = value;
            succallbacks.forEach((cb) => {
                cb(value);
            })
        }, 0);
    }

    function reject(value) {
        setTimeout(() => {
            status = 'rejected';
            reason = value;
            failcallbacks.forEach((cb) => {
                cb(value);
            })
        }, 0);
    }
    fn(resolve, reject);
}

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
})
p.then(data => {
    console.log(data);
    return new Promise((resolve, reject) => {    //then 方法返回的是一个promise对象，故执行 promise中的then注册该结果，在resolve
        setTimeout(() => { resolve(2); }, 1000)
    })
}).then(data => {
    console.log(data);
})