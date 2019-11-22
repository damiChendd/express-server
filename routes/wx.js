//wx.js用来接收微信发来的信息
//引入express框架
var express = require('express');
var router = express.Router();

//post解析post数据
var bodyParser = require('body-parser');
// var xml2js = require('xml2js');
var xmlparser = require('express-xml-bodyparser');

//引入获取access_token函数
var getAccessToken = require('./getAccessToken.js');
//引入获取ticket函数
var getTicket = require('./getTicket.js');

//引入createMenu函数
var createMenu = require('./createMenu.js')

//引入写入文件模块，用来写入access_token
var fs = require('fs');

//定义解析数据
var jsonParse = bodyParser.json();
var urlEncodeParse = bodyParser.urlencoded({extended: false});
// var xmlParse =new xml2js.Parser();

// var builder = new xml2js.Builder();  // JSON->xml
// var parser = new xml2js.Parser();   //xml -> json

//引入创建二维码
var createQrCode = require('./createQrCode.js');
var request = require('request');





//获取微信的xml返回数据
router.post('/',xmlparser({trim: false, explicitArray: false}), function (req,res,next) {
    //获取文本消息，如果是text类型的，返回要回复的xml

    console.log(JSON.stringify(req.body));
    // console.log(xmlparse.parseString(req.body));
    // console.log(req.body);
    // console.log(req.body.msgtype);
    console.log(JSON.parse(JSON.stringify(req.body)).xml.msgtype);
    var toUser = JSON.parse(JSON.stringify(req.body)).xml.tousername;
    var fromUser = JSON.parse(JSON.stringify(req.body)).xml.fromusername;
    var createTime = new Date().getTime();
    var mediaId = JSON.parse(JSON.stringify(req.body)).xml.mediaid;

    console.log(toUser+','+fromUser+','+createTime+','+mediaId);

    if(JSON.parse(JSON.stringify(req.body)).xml.msgtype == 'text'){
        res.send('<xml>\n' +
            '  <ToUserName><![CDATA['+ fromUser+']]></ToUserName>\n' +
            '  <FromUserName><![CDATA['+toUser+']]></FromUserName>\n' +
            '  <CreateTime>'+createTime+'</CreateTime>\n' +
            '  <MsgType><![CDATA[text]]></MsgType>\n' +
            '  <Content><![CDATA[you are a pig]]></Content>\n' +
            '</xml>')
    }else if(JSON.parse(JSON.stringify(req.body)).xml.msgtype == 'image'){
        res.send('<xml>\n' +
            '  <ToUserName><![CDATA['+ fromUser+']]></ToUserName>\n' +
            '  <FromUserName><![CDATA['+toUser+']]></FromUserName>\n' +
            '  <CreateTime>'+createTime+'</CreateTime>\n' +
            '  <MsgType><![CDATA[image]]></MsgType>\n' +
            '  <Image>\n' +
            '<MediaId><![CDATA['+mediaId+']]></MediaId>>'+
            '</Image>\n' +
            '</xml>')
    } else{
        res.send('success');
    }

    // res.send('wx验证接口请求');
});

//获取access_token

// setInterval(function () {
//     //执行获取access_token
//     getAccessToken.fun();
//     console.log("间隔执行");
// },1000)
// console.log("调用getaccess函数");
// getAccessToken()
// console.log("调用getaccess结束");

// 获取ticket
console.log('调用getTicket函数')
getTicket()
console.log('调用getTicket函数结束')





//写入文件测试
// console.log("执行写入文件");
// var message={
//     "access_token":"456"
// }
// var jsonMessage = JSON.stringify(message);
// fs.writeFile('./public/json/access_token.json',jsonMessage,function (err) {
//     if(err){
//         throw err;
//     }
// })
// console.log("执行完毕");


//读取文件测试
// console.log("执行读取文件");
// fs.readFile('./public/json/access_token.json','utf-8',function (err,data) {
//     if(err){
//         throw err;
//     }
//     console.log("数据开始");
//     console.log(data);
//     // console.log(JSON.parse(data).access_token);
//     console.log("数据结束");
// })
// console.log("执行结束");


//定义子菜单
// console.log("执行定义菜单");
// createMenu();
// console.log("定义菜单执行完毕");


//创建二维码
// console.log("调用创建二维码");
// createQrCode();
// console.log("调用创建二维码结束");


module.exports = router;
