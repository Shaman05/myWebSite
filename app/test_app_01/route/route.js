/**
 * Created with JetBrains PhpStorm.
 * User: Chen Chao
 * Date: 2015/5/4
 * Time: 15:47
 */

module.exports = {
  start: function(app){
    app.get('/test', function(req, res){
      res.end('<h3>This is test_app response!</h3>');
    });
    app.get('/', function(req, res){
      res.render('index', {
        title: 'Hey test 01',
        message: 'Hello there! This is test_app_01 response! <p>这是一个段落</p>'
      });
    })
  }
};