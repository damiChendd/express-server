// 登录接口
//登录接口
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParse = bodyParser.json();
var urlEncodeParse = bodyParser.urlencoded({extended: false});
var database = require('../../../public/javascripts/publicData.js')


router.post('/',jsonParse,function (req,res,next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:80');
  let obj = {
    id:null,
    userName: req.body.userName,
    userPhone: req.body.userPhone
  }
  obj.id = database.userInfo.length;
  database.userInfo.push(JSON.stringify(obj));
  res.send({code:200,status:'success'})

})

module.exports = router;
