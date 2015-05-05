/**
 * Created with JetBrains PhpStorm.
 * User: Chen Chao
 * Date: 2015/5/4
 * Time: 11:35
 */

global._ROOT_ = __dirname;

var express = require('express');
var http = require('http');
var conf = require('./config.web');
var route = require('./core/route');
var app = express();
var server = http.createServer(app);

//开启日志
conf.startLog(app);

//开启模板引擎
conf.startTplEngine(app);
conf.startStatic(express, app);

//开启路由
route.start(app);

//启动应用
server.listen(conf.port, function(){
  console.log("Express server listening on port " + conf.port);
});