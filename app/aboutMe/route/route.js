/**
 * Created with JetBrains PhpStorm.
 * User: Chen Chao
 * Date: 2015/5/4
 * Time: 15:47
 */

var _ = require('lodash-node');
var userModel = require('../model/userModel');
var conf = require('../config');
var commonData = {
  ENV: conf.ENV
};

module.exports = {
  index: function(req, res){

    userModel.list('', function(err, rows){
      res.render('index', _.assign(commonData, {
          content: JSON.stringify(rows)
      }));
    });

  }
};