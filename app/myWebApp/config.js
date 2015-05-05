/**
 * Created with JetBrains PhpStorm.
 * User: Chen Chao
 * Date: 2015/5/4
 * Time: 11:52
 */

var path = require('path');

module.exports = {
  route: path.join(__dirname, 'route', 'route.js'),
  template: 'html',
  template_dir: path.join(__dirname, 'www'),
  startStatic: function(express, app){
    app.use('/lib', express.static(path.join(__dirname, 'www', 'lib')));
    app.use('/css', express.static(path.join(__dirname, 'www', 'css')));
    app.use('/js', express.static(path.join(__dirname, 'www', 'js')));
    app.use('/templates', express.static(path.join(__dirname, 'www', 'templates')));
    app.use('/document', express.static(path.join(__dirname, 'document')));
  },
  use_yod_mock: true
};