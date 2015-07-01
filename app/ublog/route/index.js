/**
 * Created with JetBrains PhpStorm.
 * User: Chen Chao
 * Date: 2015/5/6
 * Time: 17:58
 */

var route = require('./route');

module.exports = {
  start: function(app){
    app.get('/', route.login);
    app.get('/favicon.ico', function(req, res){});
    app.get('/:page', route.page);
    app.get('/page/:page', route.pageMore);
    app.post('/api/:api', route.api);
  }
};