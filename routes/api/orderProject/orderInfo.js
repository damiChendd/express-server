// // 填写订单接口
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParse = bodyParser.json();
var urlEncodeParse = bodyParser.urlencoded({extended: false});
var database = require('../../../public/javascripts/publicData.js')


router.post('/',jsonParse,function (req,res,next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:80');
  var boj = {
    userPhone:req.body.userPhone,
    orderId:database.orderInfo.length,
    panelWidth:req.body.panelWidth,
    panelHeight:req.body.panelHeight,
    panelThickness:req.body.panelThickness,
    category:req.body.category
  }
  database.orderInfo.push(boj)
  res.send({code:200,status:'success'})
});

module.exports = router;
