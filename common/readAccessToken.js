//公用方法
//从json文件中读取access_token
var  express = require('express');
var fs = require('fs');

function readAccessToke(){
    fs.readFile('./public/json/access_token.json','utf-8',function (err,data) {
        if(err){
            throw err;
        }else {
            return JSON.parse(data).access_token;
        }
        // console.log(JSON.parse(data).access_token);
    });
    console.log(access_token);
    return access_token;
}

module.exports = readAccessToke;