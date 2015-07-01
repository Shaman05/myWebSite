/**
 * Created with JetBrains PhpStorm.
 * User: Chen Chao
 * Date: 2015/5/4
 * Time: 11:35
 */

var port = 80;

module.exports.registerApp = function(opt){
  global._ROOT_ = __dirname;
  global._APP_NAME_ = opt.appName;
  port = opt.port || port;
};

module.exports.start = function(){
  var http = require('http');
  var express = require('express');
  var cookieParser = require('cookie-parser');
  var bodyParser = require('body-parser');
  var multer = require('multer');
  var conf = require('./core/config.web');
  var route = require('./core/route');
  var app = express();
  var server = http.createServer(app);

  //设置 Cookie
  app.use(cookieParser());

  //解析参数
  app.use(bodyParser.json()); // for parsing application/json
  app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
  app.use(multer()); // for parsing multipart/form-data

  //开启日志
  //conf.startLog(app);

  //开启模板引擎
  conf.startTplEngine(app);
  conf.startStatic(express, app);

  //开启路由
  route.start(app);

  //启动应用
  server.listen(port, function(){
    console.log("Express server listening on port " + port);
  });
};