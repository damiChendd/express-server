var express = require('express');
var request = require('request');
var fs = require('fs');

//定义一个函数，获取accessToken
function  accessToken() {
    //调用微信接口
    console.log("开始执行");
    var appID = 'wx0124de280cc9cf5d';
    var appscreat = 'f2d93736518bd12eb07b24d1e26b85bf';
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

