//登录接口
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParse = bodyParser.json();
var urlEncodeParse = bodyParser.urlencoded({extended: false});

router.post('/',jsonParse,function (req,res,next) {
    // res.header('Access-Control-Allow-Origin', 'http://localhost:80');
    console.log(req.body);
    res.send("请求login接口");
})

module.exports = router;
