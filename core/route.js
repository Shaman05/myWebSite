/**
 * Created with JetBrains PhpStorm.
 * User: Chen Chao
 * Date: 2015/5/4
 * Time: 15:31
 */

var conf = require('./config.web');

module.exports = {
  start: function(app){
    app.get('/healthCheck', function(req, res) {
      res.send(
        '<h3>Health check page:</h3>' +
        '<p>hello world!</p>'
      );
      res.end();
    });

    //site route resolve
    try{
      var site_route = require(conf.site_conf.route);
      site_route.start(app);
    }catch(e){
      console.error(e);
    }
  }
};