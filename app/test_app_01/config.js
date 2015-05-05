/**
 * Created with JetBrains PhpStorm.
 * User: Chen Chao
 * Date: 2015/5/4
 * Time: 11:52
 */

var path = require('path');
var fs = require('fs');

module.exports = {
  route: path.join(__dirname, 'route', 'route.js'),
  template: 'html',
  template_dir: path.join(__dirname, 'template'),
  templateEngine: function(app){
    app.engine('ntl', function (filePath, options, callback) { // define the template engine
      fs.readFile(filePath, function (err, content) {
        if (err) return callback(new Error(err));
        // this is an extremely simple template engine
        var rendered = content.toString().replace('#title#', options.title)
          .replace('#message#', options.message);
        return callback(null, rendered);
      })
    });
    app.set('views', path.join(__dirname, 'template')); // specify the views directory
    app.set('view engine', 'ntl'); // register the template engine
  }
};