/**
 * Created with JetBrains PhpStorm.
 * User: Chen Chao
 * Date: 2015/7/1
 * Time: 16:10
 */

var appService = require('./service');

appService.registerApp({
  appName: 'ublog',
  port: 3001
});
appService.start();