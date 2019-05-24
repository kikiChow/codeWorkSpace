// // const fetch = require('node-fetch');
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response =>{
//     response.json()
//     .then( data => {
//         console.log('data is',data)})
//     .then( error =>{'error is',error})
    
// })

var url = "/fetch";
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "post",
    headers: {
        "Content-type": "application/x-www-form-urlencoded"
    },
    body: "name=luwenjing&age=22"
})
    .then(function (response) {
        if (response.status == 200) {
            return response;
        }
    })
    .then(function (data) {
        return data.text();
    })
    .then(function (text) {
        console.log("请求成功，响应数据为:", text);
    })
    .catch(function (err) {
        console.log("Fetch错误:" + err);
    });
