/**
 * Created with JetBrains PhpStorm.
 * User: Chen Chao
 * Date: 2015/5/6
 * Time: 17:58
 */

var route = require('./route');
var ajax = require('./ajax');

module.exports = function(app){
  //page route
  app.get('/', route.index);

  //ajax api
  app.get('/userList', ajax.userList);
};