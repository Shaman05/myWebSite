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
  template_dir: path.join(__dirname, 'template')
};