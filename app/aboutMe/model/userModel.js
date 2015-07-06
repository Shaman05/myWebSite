/**
 * Created with JetBrains PhpStorm.
 * User: Chen Chao
 * Date: 2015/7/6
 * Time: 10:48
 */

var util = require('../common/util');
var baseModel = require('./baseModel');
var db = baseModel.db;

module.exports = {
  list: function(condition, callback){
    db.query('select * from user', function(err, rows){
      util.sqlErrHanlding(err);
      callback(err, rows);
    });
  }
};