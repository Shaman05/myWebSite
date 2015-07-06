/**
 * Created with JetBrains PhpStorm.
 * User: Chen Chao
 * Date: 2015/7/6
 * Time: 11:45
 */

var util = require('../common/util');
var userModel = require('../model/userModel');

module.exports = {
  userList: function(req, res){
    userModel.list('', function(err, rows){
      util.ajaxReturn(req, res, err, rows);
    });
  }
};