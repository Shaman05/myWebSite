/**
 * Created with JetBrains PhpStorm.
 * User: Chen Chao
 * Date: 2015/5/4
 * Time: 15:47
 */

var conf = require('../config');
var yod_mock_data = require('./yod_mock_data');
var apiPath = '/api';

module.exports = {
  start: function(app){
    app.get('/', function(req, res){
      res.render('index', {});
    });
    app.get('/api/:method', function(req, res){
      var base_res = {
        boolean: 1,
        message: '',
        data: [],
        error_code: 200,
        require_login: 0,
        req_path: ''
      };
      base_res.req_path = req.path.replace(apiPath, '');
      var dataMethod = yod_mock_data[req.params.method];
      if(dataMethod){
        base_res.data = dataMethod();
      }else{
        base_res.boolean = 0;
        base_res.message = '尚未定义该接口的 mock 数据'
      }
      res.json(base_res);
    });
  }
};