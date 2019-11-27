// 订单列表的页面
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParse = bodyParser.json();
var urlEncodeParse = bodyParser.urlencoded({extended: false});
var database = require('../../../public/javascripts/publicData.js');

// 返回数据
router.post('/',jsonParse,function (req,res,next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:80');
  //  将获取到的订单数据返回给前端
  res.send({code:200,status:'success',data:database.orderInfo})
})

module.exports = router;


