//公用方法
//从json文件中读取access_token
var  express = require('express');
var fs = require('fs');

function readAccessToke(){
    fs.readFile('./public/json/access_token.json','utf-8',function (err,data) {
      console.log('进入同步读取的函数')
      if(err){
            throw err;
        }else {
            console.log('打印返回的token')
            console.log(JSON.parse(data).access_token)
            return JSON.parse(data).access_token;
        }
    });
}

module.exports = readAccessToke;
