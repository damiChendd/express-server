var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.header('Access-Control-Allow-Origin', '*');
  console.log('调用接口');
  // res.render('index', { title: 'Express' });
  res.send('测试成功')
});

module.exports = router;
