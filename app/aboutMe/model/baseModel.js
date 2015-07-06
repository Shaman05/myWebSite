/**
 * Created with JetBrains PhpStorm.
 * User: Chen Chao
 * Date: 2015/7/6
 * Time: 10:46
 */

var path = require('path');
var db = require(path.join(_ROOT_, 'core', 'dataBase'));

module.exports = {
  db: db
};