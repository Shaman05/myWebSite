/**
 * Created with JetBrains PhpStorm.
 * User: Chen Chao
 * Date: 2015/7/6
 * Time: 10:51
 */

var _ = require('lodash-node');

module.exports = {
  sqlErrHanlding: function(err){
    if(err){
      console.log('Sql error: ' + err);
      return true;
    }
    return false;
  },
  paserCondition: function(){},
  ajaxReturn: function(req, res, err, data){
    var resData = {
      status: 1,
      message: 'ok',
      data: data || []
    };
    if(err){
      resData.status = 0;
      resData.message = err
    }
    res.json(resData);
  }
};