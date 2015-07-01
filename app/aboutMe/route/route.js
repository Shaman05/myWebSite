/**
 * Created with JetBrains PhpStorm.
 * User: Chen Chao
 * Date: 2015/5/4
 * Time: 15:47
 */

module.exports = {
  index: function(req, res){
    res.render('index', {
      content: 'Hello!'
    });
  }
};