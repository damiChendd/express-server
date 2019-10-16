//创建菜单
var request = require('request');
var fs = require('fs');
var accessToken;
var menu={
    "button": [
        {
            "type": "click",
            "name": "菜单1",
            "key":"1"
        },
        {
            "type": "click",
            "name": "菜单2",
            "key":"2"
        },
        {
            "name": "菜单3",
            "key":"3",
            "type": "click",
            "sub_button": [
                {
                    "type": "view",
                    "name": "子菜单1",
                    "url":"http://www.baidu.com"
                },
                {
                    "type": "view",
                    "name": "blog",
                    "url":"http://132.232.61.73:82"
                }
            ]
        }
    ]
};

function createMenu(){
    let promiseFsRead = new Promise(function () {
        fs.readFile('./public/json/access_token.json','utf-8',function (err,data) {
            var that = this;
            if(err){
                throw err;
            }
            console.log(JSON.parse(data));
            that.accessToken = JSON.parse(data).access_token;
            console.log(that.accessToken);
            requestWX(that.accessToken);
        });
    });
    console.log("准备执行请求函数");


    //从json文件读取菜单按钮定义的json文件
    // console.log("读取数据结束");
    // console.log("accessToken"+that.accessToken);
    // console.log("发起请求开始");
    //向微信发送post请求

}

function requestWX(accessToken){
    var url = ' https://api.weixin.qq.com/cgi-bin/menu/create?access_token='+accessToken;
    request({
        url:url,
        method:"POST",
        json:true,
        header:{
            "content-type":"application/json"
        },
        body:menu
    },function (error,response,body) {
        if(!error && response.statusCode == 200){
            console.log(body);
        }
        console.log("发起请求结束");
    })
}

module.exports = createMenu;