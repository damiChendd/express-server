//根据微信的签名规则生成签名，并返回给前端所需要的参数
var express = require('express')
var router = express.Router()

router.get('jssdkP')

//生成时间戳
function timestamp () {
  return new Date().getTime()
}
//生成随机字符串

//shal-1加密
//返回前端三个参数

