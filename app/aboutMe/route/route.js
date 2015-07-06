/**
 * Created with JetBrains PhpStorm.
 * User: Chen Chao
 * Date: 2015/5/4
 * Time: 15:47
 */

var userModel = require('../model/userModel');

module.exports = {
  index: function(req, res){

    userModel.list('', function(rows){
      res.render('test', {
        content: JSON.stringify(rows)
      });
    });

  }
};