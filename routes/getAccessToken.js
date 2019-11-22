var express = require('express');
var request = require('request');
var fs = require('fs');

//定义一个函数，获取accessToken
function  accessToken() {
    //调用微信接口
    console.log("开始执行");
    var appID = 'wxab8b04c7dd67b197';
    var appscreat = 'b38b72dbe24ad50b7f9b361f92190dc1';
    var url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='+appID+'&secret='+appscreat;
    console.log("开始请求");
    request(url,function (error,response,body) {
        if(!error&&response.statusCode == 200){
            console.log(body);
            //将body写入json文件
            fs.writeFile('./public/json/access_token.json',body,function (err) {
                if(err){
                    throw err;
                }
            })
        }
    });
    console.log("执行结束");
}

module.exports = accessToken

