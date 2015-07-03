/**
 * Created with JetBrains PhpStorm.
 * User: Chen Chao
 * Date: 2015/7/3
 * Time: 10:37
 */

var appService = require('./service');

appService.registerApp({
  appName: 'shamanWX',
  port: 8080
});
appService.start();