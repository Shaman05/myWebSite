/**
 * Created with JetBrains PhpStorm.
 * User: Chen Chao
 * Date: 2015/5/6
 * Time: 17:58
 */

var route = require('./route');

module.exports = function(app){

  app.get('/', function(req, res){
    res.write('<h1>Hello</h1>');
    res.end();
  });

  app.get('/wx', route.wx);

};