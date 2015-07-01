/**
 * Created with JetBrains PhpStorm.
 * User: Chen Chao
 * Date: 2015/5/4
 * Time: 11:52
 */

var path = require('path');

module.exports = {
  route: path.join(__dirname, 'route', 'index'),
  template: 'html',
  template_dir: path.join(__dirname, 'template'),
  startStatic: function(express, app){
    app.use('/static', express.static(path.join(__dirname, 'static')));
  },
  use_yod_mock: false
};