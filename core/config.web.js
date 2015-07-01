/**
 * Created with JetBrains PhpStorm.
 * User: Chen Chao
 * Date: 2015/5/4
 * Time: 11:44
 */

var path = require('path');
var ejs = require('ejs');
var log4js = require('log4js');
var logger = log4js.getLogger('normal');

module.exports = applyConf();

function applyConf(){
  var app_dir = path.join(_ROOT_, 'app');
  var site_dir = path.join(app_dir, global._APP_NAME_);
  var tpl_suffix = 'html';
  var site_conf = {};
  try{
    site_conf = require(path.join(site_dir, 'config.js'));
  }catch (e){
    console.error(e);
  }
  return {
    app_dir: app_dir,
    site_dir: site_dir,
    site_conf: site_conf,
    logger: logger,

    //排除静态目录
    startStatic: site_conf.startStatic || function(express, app){
      app.use(express.static('public'));
    },

    //定义模板引擎
    startTplEngine: site_conf.templateEngine || function(app){
      app.set('views', site_conf.template_dir);
      app.engine('.' + tpl_suffix, ejs.__express);
      app.set('view engine', tpl_suffix);
    },

    //log4js 配置
    startLog: function(app){
      log4js.configure({
        appenders: [
          { type: 'console' }, //控制台输出
          {
            type: 'file', //文件输出
            filename: 'logs/access.log',
            pattern: "_yyyy-MM-dd",
            maxLogSize: 1024,
            backups:3,
            category: 'normal'
          }
        ],
        replaceConsole: true
      });
      logger.setLevel('INFO');
      app.use(log4js.connectLogger(logger, {
        //level: log4js.levels.INFO,
        level: 'auto',
        format: ':method :url'
      }));
    }
  }
}