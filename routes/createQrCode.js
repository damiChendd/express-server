//生成两张不同的二维码，将二维码放入不同的标识，存取二维码的标识
var express = require('express');
var request = require('request');
var fs = require('fs');
var readAccessToken = require('../common/readAccessToken.js');
var postRequest = require('../common/request.js');

function createQrCode() {
    fs.readFile('./public/json/access_token.json','utf-8',function (err,data) {
        if(err){
            throw err;
        }
        requestWx(JSON.parse(data).access_token)
    });
}

function requestWx(accessToken){
    console.log(accessToken);
    var url = 'https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token='+accessToken;
    console.log(url);
    var createInfo = {
        "action_name": 'QR_LIMIT_SCENE',
        "action_info": {
            "scene": {
                "scene_id": 2
            }
        }
    };
    request({
        url:url,
        method:"POST",
        json:true,
        header:{
            "content-type":"application/json"
        },
        body:createInfo
    },function (error,response,body) {
        if(!error && response.statusCode == 200) {
            console.log(body);
        }
    })
}

module.exports = createQrCode;