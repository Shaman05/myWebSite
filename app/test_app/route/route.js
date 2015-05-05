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
        title: 'Hey',
        message: 'Hello world!'
      });
    });
    app.get('/page/:page', function(req, res){
      res.render('page/' + req.params.page, {})
    });
    app.get('/api/*', function(req, res){
      res.json({
        boolean: 1,
        message: '',
        apiUrl: req.path,
        data: []
      });
    });
  }
};