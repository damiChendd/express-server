//公用方法
//请求api的request请求
var express = require('express');
var request = require('request');

//get请求
// function get(url) {
//     request(url)
// }
//post请求
function post(url,data) {
    console.log("调用post请求");
    request({
        url:url,
        method:"POST",
        json:true,
        header:{
            "content-type":"application/json"
        },
        body:data
    },function (error,response,body) {
        if(!error && response.statusCode == 200){
            console.log(body);
            return "ok";
        }else{
            return "error"
        }
    })
}

module.exports = post;