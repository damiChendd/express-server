// // 根据access_token 获取ticket，并组合成签名给前端使用
// // 请求接口 https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=ACCESS_TOKEN&type=jsapi
var express = require('express');
var request = require('request');
var readAccessToke = require('../common/readAccessToken.js')
var fs = require('fs');

function  ticket() {
    // 读文件获取access——token同步失败，所以这边固定赋值写死
    var  access_token = "26_WFLVdqwHvw426mSAzEhpsoOontiAk2sz-WvYJkogoW6OXLDmGg4HoIJleAk1_sbtKV-TJY_-k2O-QOoEBtOPYIlSCAuzKMY1_M-x6Rc21PkW0YCsDI5KOyTPRqN58JxGF1uIBXWjCukoYFCnAFYjAAAMRK"
    var url = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token='+access_token+'&type=jsapi'
    request(url,function (error,response,body) {
      if(!error && response.statusCode == 200) {
        //JSON.parse(body).ticket
        //将返回的ticket写入到json中
        fs.writeFile('./public/json/ticket.json',body,function (err) {
          if(err){
            throw err;
          }
        })
      }
    })
}


module.exports = ticket
